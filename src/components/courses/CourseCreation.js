import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import { Helmet } from "react-helmet";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { firebaseIniciarSesion } from "src/utils/FirebaseUtil";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Yup from "yup";

const CourseCreation = () => {
  const navigate = useNavigate();

  const crearCurso = () => {
    // firebaseRegistrarUsuario(usuario.email, usuario.password);
    alert("El usuario creo un curso con éxito. Codigo curso: ");
    navigate("/app/homeUser", { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>Crear curso | AGE</title>
      </Helmet>
      
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "150%",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <Formik
            /* initialValues={{
              email: "",
              firstName: "",
              lastName: "",
              password: "",
              // policy: false
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Correo invalido")
                .max(255)
                .required("Ingresa un correo"),
              firstName: Yup.string()
                .max(255)
                .required("El nombre es obligatorio"),
              lastName: Yup.string()
                .max(255)
                .required("El apelldo es obligatorio"),
              password: Yup.string()
                .max(255)
                .required("Ingresa una contraseña"),
              // policy: Yup.boolean().oneOf([true], 'Terminos y condiciones')
            })} */
            onSubmit={(usuario) => {
              crearCurso();
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="h2">
                    Crear curso
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Cree un curso en el que sera el maestro
                  </Typography>
                </Box>

                <TextField
                  // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="Area del curso"
                  margin="normal"
                  name="areaCurso"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  // value={values.areaCurso}
                  variant="outlined"
                />
                <TextField
                  // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="Nombre del curso"
                  margin="normal"
                  name="nombreCurso"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  // value={values.nombreCurso}
                  variant="outlined"
                />
                <TextField
                  // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="Administradores del curso"
                  margin="normal"
                  name="administradoresCurso"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  // value={values.administradoresCurso}
                  variant="outlined"
                />
                <TextField
                  // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="Descripcion del curso"
                  multiline
                  maxRows={4}
                  margin="normal"
                  name="descripcionCurso"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  // value={values.descripcionCurso}
                  variant="outlined"
                />
                <TextField
                  // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="Invitar usuarios al curso"
                  margin="normal"
                  name="invitadosCurso"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  // value={values.invitadosCurso}
                  variant="outlined"
                />

                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Crear Curso
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default CourseCreation;
