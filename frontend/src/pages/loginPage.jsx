import React, { useState } from "react";
import axios from "axios";
import InputField from "../components/InputFeild";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password
      });

      // Save token in localStorage for later use
      localStorage.setItem("token", response.data.token);

      console.log("Login Successful:", response.data);
      alert("Login successful!");
      
      // Redirect to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        {error && <p className="auth-error">{error}</p>}

        <Button text={loading ? "Logging in..." : "Login"} type="submit" disabled={loading} />
      </form>
    </div>
  );
}
