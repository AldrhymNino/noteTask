import { Input } from "@mui/material";

const input = ({
  disableUnderline = false,
  id = "",
  sx = null,
  className = "",
  placeholder = "",
  name = null,
  type = "text",
  handler = null,
  defaultValue = "",
  disabled
}) => {
  return (
    <Input
      autoComplete="off"
      defaultValue={defaultValue}
      fullWidth
      onChange={handler}
      disableUnderline={disableUnderline}
      id={id}
      sx={sx}
      className={`input ${className}`}
      placeholder={placeholder}
      name={name}
      type={type}
      disabled={disabled}
    />
  );
};

export default input;
