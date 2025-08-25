import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('blogUser='));
    if (cookie) {
      try {
        return JSON.parse(decodeURIComponent(cookie.split('=')[1]));
      } catch {
        return null;
      }
    }
    return null;
  });

  const login = (username, password) => {
    // Simulação de login. Substitua por chamada real à API.
    if (username === "professor" && password === "1234") {
      const userObj = { username };
      setUser(userObj);
      document.cookie = `blogUser=${encodeURIComponent(JSON.stringify(userObj))}; path=/; max-age=604800`;
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    document.cookie = 'blogUser=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
