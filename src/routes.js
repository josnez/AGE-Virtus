import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
import Dashboard from './pages/Dashboard';
import EditCustomer from './pages/EditCustomer';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Home from './pages/Home';
import HomeUser from './pages/HomeUser';
import IngresoClass from './pages/IngresoClass';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      /* { path: 'customers', element: <CustomerList /> },
      { path: 'customer-new', element: <EditCustomer /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'home', element: <Home /> },
      { path: '*', element: <Navigate to="/404" /> } */
      { path: 'settings', element: <Settings /> },
      { path: 'homeUser', element: <HomeUser /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'customer-new', element: <EditCustomer /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'home', element: <Home /> },


      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/home" /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: 'ingresoClase', element: <IngresoClass /> }
    ]
  }
];

export default routes;
