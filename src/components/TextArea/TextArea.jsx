import { TextField } from "@mui/material";
const textarea = ({ placeholder, name, defaultValue = "", handler }) => {
  return (
    <TextField
      onChange={handler}
      defaultValue={defaultValue}
      name={name}
      margin="dense"
      sx={{
        width: "100%",
        "& .MuiOutlinedInput-root": {
          color: "var(--primaryText)", // Color del texto dentro del input
          "& fieldset": { borderColor: "var(--primaryText)" }, // Borde normal
          "&:hover fieldset": { borderColor: "var(--secondaryText)" }, // Borde al pasar el mouse
        },
        "& .MuiInputBase-input": {
          color: "var(--primaryText)", // 🔥 Asegura que el texto tenga el color correcto
        },
        "& .MuiInputLabel-root": {
          color: "var(--secondaryText)", // Color del label cuando no está enfocado
        },
        "& .MuiOutlinedInput-input::placeholder": {
          color: "var(--secondaryText)", // Color del placeholder
          opacity: 1, // Asegura que el color del placeholder se vea bien
        },
      }}
      placeholder={placeholder}
      multiline
      maxRows={3}
    ></TextField>
  );
};

export default textarea;
