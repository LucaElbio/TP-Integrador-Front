import { useEffect, useState } from "react";
import { deleteCategory, getCategories, postCategory } from "../../api/categories";
import { Category } from "../../api/categories/types";
import { Button, Grid, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import { Add, Delete } from "@mui/icons-material";
import { CategoryModal } from "./components/createCategoryModal";

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = ({ name }: { name: string }) => {
    postCategory({ name }).then(() => {
      getCategories().then(({ data }) => {
        setCategories(data);
      });
    });
  };

  const handleDelete = (id: number) => {
    deleteCategory(id).then(() => {
      loadData();
    });
  };

  const loadData = () => {
    getCategories().then(({ data }) => {
      setCategories(data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Nombre" },
  ];

  return (
    <div style={{ padding: "0px 20px" }}>
      <Grid container spacing={2}>
        <Grid item lg={10}>
          <h1>Categorías</h1>
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
            rows={categories}
            sx={{
              width: "600px",
              '& .MuiDataGrid-overlayWrapper': {
                height: '50px',
              },
            }}
            disableRowSelectionOnClick
            columns={[
              ...columns,
              {
                field: "actions",
                headerName: "Acciones",
                width: 150,
                align: "center",
                headerAlign: "center",
                renderCell: (params) => (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                      if (params.row.id !== undefined) {
                        handleDelete(params.row.id);
                      }
                    }}
                  >
                    <Delete />
                  </Button>
                ),
              },
            ]}
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
