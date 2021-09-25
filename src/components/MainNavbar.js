import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import {Typography} from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <Logo /> 
      </RouterLink>
      <Typography color="warning" variant="h2"> AGE - Virtus </Typography>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
