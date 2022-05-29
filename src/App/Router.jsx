import { Box } from '@chakra-ui/react';
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Header from '../Layout/Header/Header';
import Home from '../Views/Home/Home';
import Login from '../Views/Login/Login';
import Profile from '../Views/Profile/Profile';
import ResetPassword from '../Views/ResetPassword/ResetPassword';

const HandleRoute = ({ component: Component, type = 'public' }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (type === 'private') {
    return isAuthenticated ? <Component /> : <Navigate to='/login' />;
  }

  return isAuthenticated ? <Navigate to='/home' /> : <Component />;
};

const LayoutRoute = () => {
  return (
    <Box minH='100vh'>
      <Header hasOptions hasSearch />
      <Box backgroundColor='brand.background'>
        <Routes>
          {/* Home route */}
          <Route path='/home' element={<Home />} />

          {/* Profile route */}
          <Route path='/:username' element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
};

const Router = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path='/' element={<HandleRoute component={Login} />} />
      <Route path='/login' element={<HandleRoute component={Login} />} />
      <Route
        path='/password/reset'
        element={<HandleRoute component={ResetPassword} />}
      />

      {/* Private routes */}
      <Route
        path='/*'
        element={<HandleRoute component={LayoutRoute} type='private' />}
      />
    </Routes>
  );
};

export default Router;
