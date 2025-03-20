import { IconButton, Button } from "@mui/material";

const button = ({
  sx = null,
  type = "button",
  color = "primary",
  variant = "contained",
  children,
  handler = null,
  component = "",
  size = "medium",
  className = "",
  disableElevation, 
  id = ""
}) => {
  if (component === "iconButton") {
    return (
      <IconButton
        className={className}
        color={color}
        sx={sx}
        type={type}
        size={size}
        onClick={handler}
        id={id}
      >
        {children}
      </IconButton>
    );
  }

  return (
    <Button
      className={className}
      color={color}
      sx={sx}
      type={type}
      variant={variant}
      onClick={handler}
      size={size}
      disableElevation={disableElevation}
      id={id}
    >
      {children}
    </Button>
  );
};

export default button;
