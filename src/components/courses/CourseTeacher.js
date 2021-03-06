import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography,
} from "@material-ui/core";

const CourseTeacher = (props) => {
  const navigate = useNavigate();
  const entrarACurso = () => {
    navigate("/ingresoClase", { replace: true });
  };
  return (
    <>
      <form {...props}>
        <Card>
          <CardHeader
            subheader="Gestiona los cursos en los que eres alumno"
            title="Mis cursos (Alumno)"
          />
          <Divider />
          <CardContent>
            <Typography color="textPrimary" gutterBottom variant="h6">
              Programacion Avanzada
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
            <Button color="primary" variant="contained" onClick={entrarACurso}>
              Agregar curso
            </Button>
          </Box>
        </Card>
      </form>
    </>
  );
};

export default CourseTeacher;
