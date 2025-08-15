import React, { useState } from "react";
import InputField from "../components/InputFeild";
import Button from "../components/Button";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register Data:", { name, email, password });
    // TODO: Call API with axios
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
      <form className="auth-form" onSubmit={handleRegister}>
        <InputField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button text="Register" type="submit" />
      </form>
    </div>
  );
}
