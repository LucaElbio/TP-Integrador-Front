import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Movie } from "../../../api/movies/types";
import { Category } from "../../../api/categories/types";
import { Platform } from "../../../api/platforms/types";

interface MovieModalProps {
  open: boolean;
  handleClose: () => void;
  handleSave: (movie: Movie) => void;
  categories: Category[];
  platforms: Platform[];
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

export const MovieModal: React.FC<MovieModalProps> = ({
  open,
  handleClose,
  handleSave,
  categories,
  platforms,
}) => {
  const [titulo, setTitulo] = useState<string>("");
  const [duracion, setDuracion] = useState<number>(0);
  const [edadMinima, setEdadMinima] = useState<number>(0);
  const [idCategoria, setIdCategoria] = useState<number>(0);
  const [idPlataforma, setIdPlataforma] = useState<number>(0);

  const handleSubmit = () => {
    handleSave({
      titulo,
      duracion,
      edadMinima,
      idCategoria,
      idPlataforma,
      id: 0,
    });
    setTitulo("");
    setDuracion(0);
    setEdadMinima(0);
    setIdCategoria(0);
    setIdPlataforma(0);
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
          Crear Película
        </Typography>
        <TextField
          fullWidth
          label="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Duración (minutos)"
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(Number(e.target.value))}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Edad Mínima"
          type="number"
          value={edadMinima}
          onChange={(e) => setEdadMinima(Number(e.target.value))}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="categoria-label">Categoría</InputLabel>
          <Select
            labelId="categoria-label"
            value={idCategoria}
            label="Categoría"
            onChange={(e) => setIdCategoria(Number(e.target.value))}
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="plataforma-label">Plataforma</InputLabel>
          <Select
            labelId="plataforma-label"
            value={idPlataforma}
            label="Plataforma"
            onChange={(e) => setIdPlataforma(Number(e.target.value))}
          >
            {platforms.map((platform) => (
              <MenuItem key={platform.id} value={platform.id}>
                {platform.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
