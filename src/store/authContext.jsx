import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  login() {},
  logout() {},
  userEmail: null,
});

AuthContext.displayName = 'AuthContext';

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('userToken'));
  const [userEmail, setUserEmail] = useState('');

  function login(userToken, email) {
    console.log('logged in');
    setToken(userToken);
    setUserEmail(email);
    localStorage.setItem('userToken', userToken);
  }

  function logout() {
    console.log('logout');
    setToken(null);
    setUserEmail(null);
    localStorage.removeItem('userToken');
  }

  const ctx = {
    isLoggedIn: !!token,
    login,
    logout,
    userEmail,
    token,
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}

export default AuthProvider;