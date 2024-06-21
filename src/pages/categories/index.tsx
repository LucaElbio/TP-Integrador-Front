import { useEffect, useState } from "react";
import { getCategories } from "../../api/categories";
import { Category } from "../../api/categories/types";
import { Button, Grid, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import { Add } from "@mui/icons-material";
import { CategoryModal } from "./components/createCategoryModal";

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (category: { nombre: string }) => {
    // postCategory({})
  };

  useEffect(() => {
    getCategories().then(({ data }) => {
      setCategories(data);
    });
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "nombre", headerName: "Nombre" },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={10}>
          <h1>Categorías</h1>
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
            rows={categories}
            columns={columns}
            checkboxSelection
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            hideFooterPagination
          />
        </div>
      </Paper>

      <CategoryModal
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
      />
    </div>
  );
};
