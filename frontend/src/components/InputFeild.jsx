import React from "react";

export default function InputField({ label, type = "text", value, onChange }) {
  return (
    <div>
      <label className="auth-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="auth-input" />
    </div>
  );
}
