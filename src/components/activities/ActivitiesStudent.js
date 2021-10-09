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

const ActivitiesStudent = (props) => (
  <form {...props}>
    <Card>
      <CardHeader
        subheader="Gestiona las Actividades en las que estas participando"
        title="Mis Actividades (Alumno)"
      />
      <Divider />
      <CardContent>
        <Typography color="textPrimary" gutterBottom variant="h6">
          Ejercicio 3 Programacion basica
        </Typography>
        <Grid container spacing={6} wrap="wrap"></Grid>
      </CardContent>
      <Divider />
    </Card>
  </form>
);

export default ActivitiesStudent;
