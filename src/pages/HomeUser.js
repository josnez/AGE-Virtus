import {
    Box,
    Button,
    Container,
    Typography,
  } from "@material-ui/core";
  import ButtonGroup from '@material-ui/core/ButtonGroup';
  import { Helmet } from "react-helmet";
  import {useNavigate } from "react-router-dom";
  
  const HomeUser = () => {
    const navigate = useNavigate();
    const cerrarSesion = ()=> {
      navigate("/", { replace: true });
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
            height: "30%",
            justifyContent: "center",
          }}
        >
          <Typography align="center" color="textPrimary" variant="h1">
            Proximamente ...
          </Typography>
          
          
          <Container maxWidth="sm" align="center">          
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button onClick={cerrarSesion}>Cerrar sesión</Button>
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
  
  export default HomeUser;
  