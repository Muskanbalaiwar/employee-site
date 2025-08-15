import { createContext, useContext, useMemo, useState } from "react";
import { setAuth, clearAuth, getAuth } from "../api/tokenStore";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => getAuth() || "");

  const login = (newToken) => {
    setToken(newToken);
    setAuth(newToken);
  };

  const logout = () => {
    setToken("");
    clearAuth();
  };

  const value = useMemo(() => ({ token, login, logout }), [token]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
