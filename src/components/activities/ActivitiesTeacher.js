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
  
  const ActivitiesTeacher = (props) => (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Gestiona las actividades que tienes activas como maestro"
          title="Mis Actividades (Maestro)"
        />
        <Divider />
        <CardContent>
          <Typography color="textPrimary" gutterBottom variant="h6">
            Ejercicio 5 programacion avanzada
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
          <Button color="primary" variant="contained">
            .
          </Button>
        </Box>
      </Card>
    </form>
  );
  
  export default ActivitiesTeacher;
  