export const getAuth = () => localStorage.getItem("token");
export const setAuth = (t) => localStorage.setItem("token", t);
export const clearAuth = () => localStorage.removeItem("token");
