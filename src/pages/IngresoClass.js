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
    
    const rutas = ["https://img.lalr.co/cms/2018/10/10100631/Leonel-Messi-1.jpg?size=xl","https://bolavip.com/__export/1632990485189/sites/bolavip/img/2021/09/30/getty_images_-_2021-09-30t102606_472.jpg_1055622710.jpg"];

    const navigate = useNavigate();
    const Ingresar = ()=> {
      navigate("/", { replace: true });
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
            height: "40%",
            justifyContent: "center",
          }}
        >
          <Container maxWidth="sm" align="left">
            <Typography align="left" color="textPrimary" variant="subtitle1">
              Ingrese el codigo para registrarse en la clase:
            </Typography>
            
            <TextField
                label = "Codigo de clase"
            />

          </Container>

          <Box sx={{ py: 2 }}>
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
          
              
          <img id="imagen" style={{maxWidth: '200px'}} src={rutas[cont]}  />
              
          <Box sx={{ py: 2 }}>
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
                  <Button
                    color="primary"
                    onClick={Ingresar}
                    
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Ingresar
                  </Button>
                </Box>

        
      
      </>
    );
  };
  
  export default IngresoClass;
  