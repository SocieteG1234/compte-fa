import { createContext, useContext, useEffect, useState } from 'react';
import UserService from '../services/userService.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    UserService.initializeUsers();
    const existing = UserService.getCurrentUser();
    if (existing) setCurrentUser(existing);
    setIsReady(true);
  }, []);

  function login(code, passwort) {
    const result = UserService.login(code, passwort);
    if (result.success) setCurrentUser(result.user);
    return result;
  }

  function logout() {
    UserService.logout();
    setCurrentUser(null);
  }

  function refresh() {
    if (!currentUser) return;
    const fresh = UserService.getUserByCode(currentUser.code);
    if (fresh) setCurrentUser(fresh);
  }

  return (
    <AuthContext.Provider value={{ currentUser, isReady, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth doit être utilisé dans AuthProvider');
  return ctx;
}
