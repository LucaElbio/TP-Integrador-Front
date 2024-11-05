import { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import { Favorite } from "../../api/favorites/types";

export const Favorites = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  useEffect(() => {
    // getCategories().then(({ data }) => {
    //   setCategories(data);
    // });
    Promise.resolve(() => setFavorites([{id: 1, title: "Ghandi", duration: 1880, category: "Cine (pucho)"}]))
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "title", headerName: "Título" },
    { field: "duration", headerName: "Duración" },
    { field: "category", headerName: "Categoría" },
  ];

  return (
    <div>
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
            columns={columns}
            checkboxSelection
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            hideFooterPagination
          />
        </div>
      </Paper>
    </div>
  );
};
