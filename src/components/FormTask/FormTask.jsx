// Components
import { Form, Input, TextArea, Subtarea, BarProgress, Button } from '..';
import { Checkbox, Typography } from "@mui/material";
import { Delete, ArrowBack, Check, Edit } from "@mui/icons-material";

// Context & State
import { CategoryContext, StorageContext, TaskContext } from "../../context";
import { useContext, useState } from "react";

const FormTask = ({ handlerSubmit, modalMethod }) => {
    const { dispatch } = useContext(StorageContext);
    const { task, setTask } = useContext(TaskContext);
    const { categories } = useContext(CategoryContext);
    const [isEditing, setIsEditing] = useState(false);

    // Get values of form { task, description }
    const changeValue = (e) => {
        const {name, value} = e.target;
        setTask((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Delete Task
    const deleteTask = () => {
        dispatch({ type: 'deleteTask', task });
        modalMethod();
    };

    return (
        <div className='container-form'>
          <Form handlerSubmit={(e) => handlerSubmit(e)}>
            <Button
              className='btn-exit'
              component="iconButton"
              handler={modalMethod}
            >
              <ArrowBack />
            </Button>

            {task.opened && (
              <>
                <Typography
                  visibility={task.completed ? "visible" : "hidden"}
                  color="success"
                >
                  Success!
                </Typography>
                <BarProgress data={task.subtasks} />
                <Typography
                  variant="body2"
                  fontSize={15}
                  component="p"
                  className='timeTask'
                >
                  Ultima vez ({task.date})
                </Typography>
              </>
            )}

            <div className='container-taskName'>
              <label className='label-taskName' htmlFor="checkTask">

                {(task.opened && !isEditing) && 
                  <Checkbox 
                    sx={{
                      color: "var(--primaryText)", // Color cuando NO está marcado
                      "&.Mui-checked": { color: "var(--secondaryText)" }, // Color cuando SÍ está marcado
                      "&:hover": { color: "var(--hoverColor)" }, // Color cuando pasas el mouse
                      "&.Mui-disabled": { color: "#666" }, // Color cuando está deshabilitado
                    }}
                    id="checkTask" onChange={(e) => {
                      dispatch({type: 'onCheck', task});
                      setTask(prev => ({
                        ...prev,
                        completed: !prev.completed,
                        subtasks: prev.subtasks.map( subtask => ({...subtask, completed: !prev.completed}))
                      }));
                    }}
                    checked={task.completed} />
                }

                {task.opened && !isEditing
                  ?
                    <div style={{
                      textDecoration: task.completed ? "line-through" : 'none'
                    }}>{task.taskName}</div>
                  :
                  <Input
                    type="text"
                    placeholder="Tarea..."
                    name="taskName"
                    defaultValue={task.taskName}
                    handler={changeValue}
                    className='inputTask'
                  />
                }
              </label>

              { task.opened &&
                <Button 
                  component="iconButton"
                  handler={() => setIsEditing(!isEditing)}
                >
                  {!isEditing ? <Edit fontSize="small" /> : <Check />}
                </Button>
              }
            </div>

            <TextArea
              placeholder="Descripción..."
              name="description"
              defaultValue={task.description}
              handler={changeValue}
            />

            <Subtarea />
              
            <Typography component='h2' className='categoryTitle' marginTop={'20px'}>Categoria</Typography>

            <select name='category' value={task.category} onChange={changeValue}>
              {categories.map(option => option !== 'todo' && <option value={option}>{option}</option>)}
            </select>

            <div className="group">
              <Button type="submit" color="primary">
                <Check />
              </Button>
              {task.opened && (
                <Button color="error" handler={deleteTask}>
                  <Delete />
                </Button>
              )}
            </div>
          </Form>
        </div>
    );
}

export default FormTask;