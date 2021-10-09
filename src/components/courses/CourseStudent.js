import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";

import { Link as RouterLink, useNavigate } from "react-router-dom";

const CourseStudent = (props) => {
  const navigate = useNavigate();
  const crearCurso = () => {
    navigate("/ingresoClase", { replace: true });
  };
  return(
    <>
    <form {...props}>
    <Card>
      <CardHeader
        subheader="Gestiona los cursos en los que eres maestro"
        title="Mis cursos (Maestro)"
      />
      <Divider />
      <CardContent>
        <Typography color="textPrimary" gutterBottom variant="h6">
          Programacion basica
        </Typography>
        <Grid container spacing={6} wrap="wrap"></Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Button color="primary" variant="contained" onClick={crearCurso}>
          Agregar curso
        </Button>
      </Box>
    </Card>
  </form>
    </>
  );
  
};

export default CourseStudent;
