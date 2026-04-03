import React, { createContext, useContext, useState, useEffect } from 'react';

// ------------------------------------------------------------------
// AuthContext  –  manages logged-in user state across the whole app
// Stores users in localStorage (demo/college project approach)
// In production you would replace this with real API calls
// ------------------------------------------------------------------

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // On first load, check if a user session is saved
  useEffect(() => {
    const saved = localStorage.getItem('ff_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // LOGIN – checks demo account and registered users in localStorage
  const login = (email, password) => {
    if (email === 'demo@fairfare.in' && password === 'demo123') {
      const u = { name: 'Demo User', email };
      localStorage.setItem('ff_user', JSON.stringify(u));
      setUser(u);
      return { success: true };
    }
    const users = JSON.parse(localStorage.getItem('ff_users') || '[]');
    const found = users.find(u => u.email === email && u.pass === password);
    if (found) {
      const u = { name: found.name, email };
      localStorage.setItem('ff_user', JSON.stringify(u));
      setUser(u);
      return { success: true };
    }
    return { success: false, error: 'Incorrect email or password.' };
  };

  // SIGNUP – saves new user to localStorage
  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('ff_users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'An account with this email already exists.' };
    }
    users.push({ name, email, pass: password });
    localStorage.setItem('ff_users', JSON.stringify(users));
    const u = { name, email };
    localStorage.setItem('ff_user', JSON.stringify(u));
    setUser(u);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('ff_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook – use this in any component: const { user, login } = useAuth();
export function useAuth() {
  return useContext(AuthContext);
}
