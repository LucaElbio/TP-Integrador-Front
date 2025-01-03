import { Add } from "@mui/icons-material";
import { Button, Grid, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import { useEffect, useState } from "react";
import { getCategories } from "../../api/categories";
import { Category } from "../../api/categories/types";
import { deleteMovie, getMovies, postMovie } from "../../api/movies";
import { Movie } from "../../api/movies/types";
import { getPlatforms } from "../../api/platforms";
import { Platform } from "../../api/platforms/types";
import { MovieModal } from "./components/createMovieModal";
import { Delete, Star } from "@mui/icons-material";
import { deleteFavorite, postFavorite } from "../../api/favorites";
import { useUser } from "../context/UserContext";

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const { user } = useUser();

  const handleOpen = () => {
    getCategories().then(({ data }) => {
      setCategories(data);
    });
    getPlatforms().then(({ data }) => {
      setPlatforms(data);
    });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = (movie: Movie) => {
    postMovie(movie).then(({ data }) => {
      loadData();
    });
  };

  const handleDelete = (id: number) => {
    deleteMovie(id).then(() => {
      loadData();
    });
  };

  const loadData = () => {
    getMovies(Number(user!.id)).then(({ data }) => {
      setMovies(data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleFavorite = (id: number, favorite: boolean) => {
    if (!user) return;
    if (favorite) {
      deleteFavorite(Number(user.id), id).then(() => {
        getMovies(Number(user!.id)).then(({ data }) => {
          setMovies(data);
        });
      });
    } else {
      postFavorite(Number(user.id), id).then(() => {
        getMovies(Number(user!.id)).then(({ data }) => {
          setMovies(data);
        });
      });
    }
  };

  const columns: GridColDef<Movie>[] = [
    {
      align: "center",
      headerAlign: "center",
      field: "title",
      headerName: "Título",
      width: 200,
    },
    {
      align: "center",
      headerAlign: "center",
      field: "category",
      headerName: "Categoría",
      valueFormatter: (value: any) => value?.name,
    },
    {
      align: "center",
      headerAlign: "center",
      field: "platform",
      headerName: "Plataforma",
      valueFormatter: (value: any) => value?.name,
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
    <div style={{ padding: "0px 20px" }}>
      <Grid container spacing={2}>
        <Grid item lg={10}>
          <h1>Películas</h1>
        </Grid>
        <Grid item lg={2} style={{ alignSelf: "center", textAlign: "right", position: "fixed", right: "20px" }}>
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
            disableRowSelectionOnClick
            sx={{
              '& .MuiDataGrid-overlayWrapper': {
                height: '50px',
              },
            }}
            columns={[
              ...columns,
              {
                field: "actions",
                headerName: "Acciones",
                width: 200,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        if (params.row.id !== undefined) {
                          handleDelete(params.row.id);
                        }
                      }}
                      sx={{ marginRight: "15px" }}
                    >
                      <Delete />
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        if (params.row.id !== undefined) {
                          handleFavorite(params.row.id, params.row.favorite);
                        }
                      }}
                      style={{
                        backgroundColor: params.row.favorite ? "#FFFFFF" : "#1976d2", // Fondo blanco si es favorito, color primario si no
                        color: params.row.favorite ? "#000000" : "#FFFFFF"             // Estrella negra si es favorito, blanco si no
                      }}
                    >
                      <Star />
                    </Button>
                  </>
                ),
              },
            ]}
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
