import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Formik } from "formik";
import { Helmet } from "react-helmet";
import {useNavigate } from "react-router-dom";
import { firebaseIniciarSesion } from "src/utils/FirebaseUtil";
import * as Yup from "yup";

const Home = () => {
  const navigate = useNavigate();
  const pasarAlogin = ()=> {
    navigate("/login", { replace: true });
  }
  const pasarARegistro = ()=> {
    navigate("/register", { replace: true });
  }
  return (
    <>
      <Helmet>
        <title>Inicio | AGE</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "45%",
          justifyContent: "center",
        }}
      >
        <Typography align="center" color="textPrimary" variant="h1">
          Virtus Gamificado
        </Typography>
        <Typography align="center" color="textPrimary" variant="h3">
          Gamificación del aula de clases
        </Typography>
        <Container>
        <Typography
          variant="h5"
          align="justify"
          color="textSecondary"
          paragraph
        >
          Por medio de la gamificación se busca una experiencia mas atractiva
          para los estudiantes al momento de atender a las clases.Con esta
          herramienta se le facilitara crear y administrar un ambiente
          gamificado para sus clases.{" "}
        </Typography>

        </Container>
        <Container maxWidth="sm" align="center">          
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={pasarAlogin}>Iniciar sesión</Button>
            <Button onClick={pasarARegistro}>Registrarse</Button>
          </ButtonGroup>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          backgroundImage:
            "url(http://elearningmasters.galileo.edu/wp-content/uploads/2017/03/Gamificacion-1000x640.jpg)",
          backgroundSize: "cover",
        }}
      ></Box>
    </>
  );
};

export default Home;
