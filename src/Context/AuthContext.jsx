import { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthenticated, setUser } from '../Store/Slices/AuthSlice';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: {},
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userContext, setUserContext] = useState({});

  useEffect(() => {
    const userStorage = localStorage.getItem('user');

    if (userStorage) {
      setUserContext(JSON.parse(userStorage));
      setIsAuthenticated(true);

      dispatch(setAuthenticated(true));
      dispatch(setUser(JSON.parse(userStorage)));
    }
  }, []);

  useEffect(() => {
    if (userContext?.email)
      localStorage.setItem('user', JSON.stringify(userContext));
  }, [userContext]);

  const login = (user) => {
    setIsAuthenticated(true);
    setUserContext(user);

    dispatch(setAuthenticated(true));
    dispatch(setUser(user));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserContext({});
    localStorage.removeItem('user');

    dispatch(setAuthenticated(false));
    dispatch(setUser({}));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user: userContext,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
