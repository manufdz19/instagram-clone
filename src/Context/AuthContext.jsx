import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: {},
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const userStorage = localStorage.getItem('user');

    if (userStorage) {
      setUser(JSON.parse(userStorage));
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (user?.email) localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = (user) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser({});
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
