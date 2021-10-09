import { Box, Button, Container, Typography } from "@material-ui/core";
import * as React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CourseTeacher from "../components/courses/CourseTeacher";
import CourseStudent from "../components/courses/CourseStudent";

const HomeUser = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const cerrarSesion = () => {
    navigate("/", { replace: true });
  };
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
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Inicio" /* icon={<RestoreIcon />} */ />
          <BottomNavigationAction label="Actividades" /* icon={<FavoriteIcon />} */ />
        </BottomNavigation>
      </Box>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <CourseStudent />
          <Box sx={{ pt: 3 }}>
            <CourseTeacher />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomeUser;
