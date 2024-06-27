import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import { Category } from "../../../api/categories/types";

interface PlatformModalProps {
  open: boolean;
  handleClose: () => void;
  handleSave: (category: Category) => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const CategoryModal: React.FC<PlatformModalProps> = ({
  open,
  handleClose,
  handleSave,
}) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = () => {
    handleSave({ name });
    setName("");
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Crear Categoría
        </Typography>
        <TextField
          fullWidth
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Guardar
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            sx={{ ml: 2 }}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
