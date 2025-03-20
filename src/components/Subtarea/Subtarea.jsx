// Components
import { Button } from "../";
import { Checkbox } from "@mui/material";
import { Cancel, Check } from "@mui/icons-material";

// Context & Hook
import { useContext, useRef } from "react";
import { TaskContext } from "../../context";
import { ID } from "../../utilities";

const Subtarea = () => {
  const { task, setTask } = useContext(TaskContext);
  const inputRef = useRef(null);

  // Add subtask
  const addSubTask = (value) => {
    const subtask = {
      id: ID(),
      subtask: value,
      completed: false,
    };

    setTask((prev) => {
      return {
        ...prev,
        subtasks: [...prev.subtasks, subtask],
        completed: false
      };
    });
  };

  // Delete subtask
  const delSubTask = (idTask) => {
    const subtasks = task.subtasks.filter(({ id }) => id !== idTask);
    setTask((prev) => {
      return {
        ...prev,
        subtasks: [...subtasks],
      };
    });
  };

  // check subtask
  const onSubCheck = (idSubtask) => {
    const auxListSub = task.subtasks.map((subtask) =>
      subtask.id === idSubtask
        ? { ...subtask, completed: !subtask.completed }
        : subtask
    );
    setTask((prev) => ({
      ...prev,
      subtasks: auxListSub,
      completed: auxListSub.every(({ completed }) => completed),
    }));
  };

  return (
    <>
      <div className="containerSubTask">
        <input
          ref={inputRef}
          className="subTask"
          placeholder="Escribe subtareas..."
        />
        <Button
          handler={() => {
            addSubTask(inputRef.current.value);
            inputRef.current.value = "";
          }}
          color="success"
          component="iconButton"
        >
          <Check />
        </Button>
      </div>
      {task.subtasks.length > 0 && (
        <div className="subTaskList">
          {task.subtasks.map(({ id, subtask, completed }) => {
            return (
              <label
                key={id}
                style={{
                  textDecorationLine: completed ? "line-through" : "none"
                }}
                htmlFor={id}
              >
                {task.opened && (
                  <Checkbox
                    id={id}
                    checked={completed}
                    onChange={() => onSubCheck(id)}
                    sx={{
                      color: "var(--primaryText)", // Color cuando NO está marcado
                      "&.Mui-checked": { color: "var(--secondaryText)" }, // Color cuando SÍ está marcado
                      "&:hover": { color: "var(--hoverColor)" }, // Color cuando pasas el mouse
                      "&.Mui-disabled": { color: "#666" }, // Color cuando está deshabilitado
                    }}
                  />
                )}

                <span>{subtask}</span>
                <Button
                  component="iconButton"
                  color="error"
                  handler={() => delSubTask(id)}
                >
                  <Cancel />
                </Button>
              </label>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Subtarea;
