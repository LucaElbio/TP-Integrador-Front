import React, { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface CategoryModalProps {
  open: boolean;
  handleClose: () => void;
  handleSave: (category: { nombre: string }) => void;
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

export const CategoryModal: React.FC<CategoryModalProps> = ({
  open,
  handleClose,
  handleSave,
}) => {
  const [nombre, setNombre] = useState<string>("");

  const handleSubmit = () => {
    handleSave({ nombre });
    setNombre("");
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
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          margin="normal"
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Guardar
          </Button>
          <Button
            variant="outlined"
            color="secondary"
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
