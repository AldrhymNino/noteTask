import { Modal } from "@mui/material";

const modal = ({ children, isActive }) => {
  return <Modal open={isActive}>{children}</Modal>;
};

export default modal;
