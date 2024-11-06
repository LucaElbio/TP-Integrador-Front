import { useEffect, useState } from "react";
import { deletePlatform, getPlatforms, postPlatform } from "../../api/platforms";
import { Platform } from "../../api/platforms/types";
import { Button, Grid, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { esES } from "@mui/x-data-grid/locales";
import { Add } from "@mui/icons-material";
import { PlatformModal } from "./components/createPlatformModal";

export const Platforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (platform: Platform) => {
    postPlatform(platform).then(() => {
      getPlatforms().then(({ data }) => {
        setPlatforms(data);
      });
    });
  };

  const handleDelete = (id: number) => {
    deletePlatform(id).then(() => {
      loadData();
    });
  };

  const loadData = () => {
    getPlatforms().then(({ data }) => {
      setPlatforms(data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Nombre", width: 200 },
    { field: "url", headerName: "URL", width: 200 },
  ];

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={10}>
          <h1>Plataformas</h1>
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
            rows={platforms}
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
                    Eliminar
                  </Button>
                ),
              },
            ]}
            checkboxSelection
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            hideFooterPagination
          />
        </div>
      </Paper>

      <PlatformModal
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
      />
    </div>
  );
};
