// Components & Icons
import {
  Header,
  Modal,
  Button,
  Task,
  Category,
  FormTask,
  ButtonTheme
} from "./components";
import { CssBaseline, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

// Hooks
import { useContext, useState } from "react";

// Context
import { CategoryContext, TaskContext, ThemeProvider } from "./context";
import { StorageContext } from "./context";

const App = () => {
  const { storage, dispatch } = useContext(StorageContext);
  const { task, reset } = useContext(TaskContext);
  const { category } = useContext(CategoryContext);
  const [isActive, setIsActive] = useState(false);

  // Submit Form
  const submit = (e) => {
    e.preventDefault();
    if (!task.taskName || !task.description) {
      alert("Por favor completa al menos tarea y descripción ");
      return;
    }

    if (task.opened) {
      updateTask();
      return;
    }

    addTask();
  };

  // AddTask
  const addTask = () => {
    dispatch({ type: 'addTask', task });
    closeTask();
  };

  // Update Task
  const updateTask = () => {
    dispatch({ type: 'updateTask', task });
    closeTask();
  };

  // Cerra Tarea
  const closeTask = () => {
    toggleModal();
    reset();
  };

  // (open / close) modal
  const toggleModal = () => {
    setIsActive(!isActive);
  };

  // Render of task...
  const renderTask = () => {
    let listTask = [];

    for(let taskStorage of storage) {
      if(category === 'todo') {
        listTask.push(<Task data={taskStorage} modalMethod={toggleModal}/>);
      }

      if(category === taskStorage.category && category !== 'todo') {
        listTask.push(<Task data={taskStorage} modalMethod={toggleModal}/>);
        console.log(category === taskStorage.category && category !== 'todo', listTask);
        continue;
      }
    };


    return listTask.length === 0 ? <Typography color="textSecondary" style={{textAlign: 'center'}}>No hay tareas disponibles</Typography> : listTask;
  };

  return (
    <>
      <CssBaseline />
      <div className="container">
        <Header>
          <Typography variant="h4" component={'h1'}>
            noteTask
          </Typography>
          <div className="containerButtons">
            <ThemeProvider>
              <ButtonTheme />
            </ThemeProvider>
            <Category />
          </div>
        </Header>
        <div className="taskList">
          { renderTask() }
        </div>
        <Button
          className="btn-openModal"
          handler={toggleModal}
          component="iconButton"
          size="medium">
          <Add fontSize="large" color="error"/>
        </Button>
      </div>

      {/* Modal Formulario */}
      <Modal isActive={isActive}>
        <FormTask handlerSubmit={submit} modalMethod={closeTask}/>
      </Modal>
    </>
  );
};

export default App;
