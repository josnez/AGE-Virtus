import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
  } from "@material-ui/core";
  import ButtonGroup from '@material-ui/core/ButtonGroup';
  import { Helmet } from "react-helmet";
  import {useNavigate } from "react-router-dom";
  import Person from '../pages/person';


  
  
  
  const IngresoClass = () => {
    
    const rutas = ["https://i.ibb.co/5nn4DwR/Mage.png","https://i.ibb.co/PTZYFxm/Warrior.png"];

    const navigate = useNavigate();
    const Ingresar = ()=> {
      var elemento = document.getElementById("codigo");
      if(elemento.value==""){
        alert("Ingrese un codigo");
      }else{
      navigate("/", { replace: true });
      }
    }
    const Volver = () => {
      navigate("/homeUser", { replace: true });
    }
    var cont =0;
    const cambiar = () => {
      if(cont ==1){
        cont = 0
      }else{
        cont = 1
      }
      
      var elemento = document.getElementById('imagen');
      elemento.src= rutas[cont];
    }
    

    
    return (
      <>
        <Helmet>
          <title>Ingreso a Clases</title>
          
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
            Ingreso Clases
          </Typography>


          
        </Box>

        <Box
          sx={{
            backgroundColor: "background.default",
            display: "flex",
            flexDirection: "row",
            height: "50%",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="sm" align="center">
            <Typography align="center" color="textPrimary" variant="subtitle1">
              Ingrese el codigo para registrarse en la clase:
            </Typography>
            
            <TextField id="codigo"
                label = "Codigo de clase"
            />

          </Container>

          <Box sx={{ py: 15  }}>
                  <Button
                    color="primary"
                    onClick={cambiar}
                    fullWidth
                    size="small"
                    type="submit"
                    variant="contained"
                  >
                    Izq
                  </Button>
                </Box>
          
          <Container maxWidth="sm" align="center">
          <Typography align="center" color="textPrimary" variant="subtitle1">
              Seleccione el personaje:
          </Typography>

            <img id="imagen" style={{maxWidth: '200px'}} src={rutas[cont]}  />
          </Container>
          <Box sx={{ py: 15,
                       }}>
                  <Button
                    color="primary"
                    onClick={cambiar}
                    fullWidth
                    size="small"
                    type="submit"
                    variant="contained"
                  >
                    Der
                  </Button>
                </Box>  


          

        </Box>

        <Box sx={{  display: "flex",
                    justifyContent: "center"

                     }}>
                  <Container maxWidth="sm" align="center">
                  
                  <Button
                    color="primary"
                    onClick={Ingresar}
                    
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Ingresar
                  </Button>
                  <h>                                                                                           </h>
                  <Button
                    color="primary"
                    onClick={Volver}
                    
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Volver
                  </Button>
                  
                  </Container>
                </Box>

        
      
      </>
    );
  };
  
  export default IngresoClass;
  