import { Grid, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import { useEffect, useState } from "react";
import { getFavorites } from "../../api/favorites";
import { Favorite } from "../../api/favorites/types";
import { useUser } from "../context/UserContext";

export const Favorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { user } = useUser();
  useEffect(() => {
    if (!user) return;

    getFavorites(Number(user.id))
      .then(({ data }) => {
        const formattedData = data.map((favorite: Favorite) => ({
          id: favorite.id!,
          title: favorite.movie!.title,
          duration: favorite.movie!.duration,
          category: favorite.movie!.category.name,
        }));
        setFavorites(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching favorite movies:", error);
      });
  }, [user]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "Título" },
    { field: "duration", headerName: "Duración" },
    { field: "category", headerName: "Categoría" },
  ];

  return (
    <div style={{ padding: "0px 20px" }}>
      <Grid container spacing={2}>
        <Grid item lg={10}>
          <h1>Películas favoritas</h1>
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
            rows={favorites}
            disableRowSelectionOnClick
            sx={{
              '& .MuiDataGrid-overlayWrapper': {
                height: '50px',
              },
            }}
            columns={columns}
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            hideFooterPagination
          />
        </div>
      </Paper>
    </div>
  );
};
