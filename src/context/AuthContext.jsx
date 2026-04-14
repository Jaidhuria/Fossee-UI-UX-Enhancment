import { createContext, useContext, useState, useEffect } from 'react';
import { users } from '../data/mockData';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('fossee_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (username, password) => {
    const found = users.find(u => u.username === username);
    if (found && password === 'pass123') {
      setUser(found);
      localStorage.setItem('fossee_user', JSON.stringify(found));
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials. Hint: use instructor1/pass123' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fossee_user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isInstructor: user?.position === 'instructor',
      isCoordinator: user?.position === 'coordinator',
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
