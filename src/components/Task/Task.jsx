// Components
import { CheckCircle, OpenInFull } from "@mui/icons-material";
import { Typography, Checkbox } from "@mui/material";
import { Button, Tooltip } from "../";

// Context
import { StorageContext, TaskContext } from "../../context";
import { useContext } from "react";

const Task = ({ data, modalMethod }) => {
  const { dispatch } = useContext(StorageContext);
  const { setTask } = useContext(TaskContext);
  const { id, taskName, completed, category } = data;
  
  // Checked task
  const onCheck = () => {
    dispatch({ type: 'onCheck', task: data });
  };

  // Open task in form
  const openTask = () => {
    setTask({
      ...data,
      opened: true
    });
    modalMethod();
  };

  return (
    <div className="task" key={id}>
      <Checkbox
        id={`checkbox${id}`}
        checked={completed}
        onChange={onCheck}
        disabled={completed}
        sx={{
          color: "var(--primaryText)", // Color cuando NO está marcado
          "&.Mui-checked": { color: "var(--secondaryText)" }, // Color cuando SÍ está marcado
          "&:hover": { color: "var(--hoverColor)" }, // Color cuando pasas el mouse
          "&.Mui-disabled": { color: "#666" }, // Color cuando está deshabilitado
        }}
      />
      <Typography
        htmlFor={`checkbox${id}`}
        variant="h6"
        component={"label"}
        sx={{
          textDecorationLine: completed ? "line-through" : "none",
          color: completed ? "green" : "inherit"
        }}
      >
        {taskName}
      </Typography>
      {completed && (
        <CheckCircle
          sx={{
            marginLeft: "10px",
            color: "green",
          }}
        />
      )}
      <Tooltip top={'0'} left={'0'} content={category} />
      <Button
        className="btnOpen"
        sx={{
          marginLeft: "auto",
        }}
        component="iconButton"
        color="info"
        handler={openTask}
      >
        <OpenInFull />
      </Button>
    </div>
  );
};

export default Task;
