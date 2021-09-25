import {
  Box,
  Button,
  Container, Link,
  TextField,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { firebaseIniciarSesion } from 'src/utils/FirebaseUtil';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();

  const iniciarSesion = async credenciales => {
    let sesionIniciada = await firebaseIniciarSesion(credenciales.email, credenciales.password);

    if (sesionIniciada) {
      navigate('/app/dashboard', { replace: true });
    } else {
      alert('Las credenciales no son correctas');
    }
  }

  return (
    <>
      <Helmet>
        <title>Iniciar sesion | AGE</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'demo@devias.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Correo invalido').max(255).required('Ingresa un correo'),
              password: Yup.string().max(255).required('Ingresa una contraseña')
            })}
            onSubmit={iniciarSesion}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Iniciar Sesión
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Iniciar sesión para acceder a los cursos
                  </Typography>
                </Box>

                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Correo electronico"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Contraseña"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
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
                    Iniciar sesión
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  No tienes una cuenta?
                  {' '}
                  <Link component={RouterLink} to="/register" variant="h6" underline="hover">
                    Registrarse
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
