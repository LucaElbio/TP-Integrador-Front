import { useEffect, useState } from "react";
import { getMovies, postMovie } from "../../api/movies";
import { Movie } from "../../api/movies/types";
import { Button, Grid, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import { Add } from "@mui/icons-material";
import { MovieModal } from "./components/createMovieModal";
import { getCategories } from "../../api/categories";
import { Category } from "../../api/categories/types";
import { getPlatforms } from "../../api/platforms";
import { Platform } from "../../api/platforms/types";

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (movie: Movie) => {
    postMovie(movie).then(({ data }) => {
      alert(data.message);
    });
  };

  useEffect(() => {
    getCategories().then(({ data }) => {
      setCategories(data);
    });
    getPlatforms().then(({ data }) => {
      setPlatforms(data);
    });
    getMovies().then(({ data }) => {
      setMovies(data);
    });
  }, []);

  const columns: GridColDef<Movie>[] = [
    { align: "center", headerAlign: "center", field: "id", headerName: "Id" },
    {
      width: 200,
      align: "center",
      headerAlign: "center",
      field: "title",
      headerName: "Título",
    },
    {
      align: "center",
      headerAlign: "center",
      field: "categoryId",
      headerName: "Categoría",
      valueFormatter: (value) => value,
    },
    {
      align: "center",
      headerAlign: "center",
      field: "platformId",
      headerName: "Plataforma",
      valueFormatter: (value) => value,
    },
    {
      align: "center",
      headerAlign: "center",
      field: "duration",
      headerName: "Duración",
      valueFormatter: (value) => value + " min.",
    },
    {
      align: "center",
      headerAlign: "center",
      field: "minimumAge",
      headerName: "Edad Mínima",
      valueFormatter: (value) => value + " años",
    },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={10}>
          <h1>Películas</h1>
        </Grid>
        <Grid item lg={2} style={{ alignSelf: "center", textAlign: "right" }}>
          <Button
            variant="contained"
            color="success"
            startIcon={<Add />}
            onClick={handleOpen}
          >
            AGREGAR
          </Button>
        </Grid>
      </Grid>

      <Paper>
        <div
          style={{
            height: "100%",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <DataGrid
            rows={movies}
            columns={columns}
            checkboxSelection
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            hideFooterPagination
          />
        </div>
      </Paper>

      <MovieModal
        open={open}
        categories={categories}
        platforms={platforms}
        handleClose={handleClose}
        handleSave={handleSave}
      />
    </div>
  );
};
