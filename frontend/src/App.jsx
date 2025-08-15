import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/loginPage";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard";
import "./index.css";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {/* <Link to="/dashboard">Dashboard</Link> */}
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </Router>
  );
}
