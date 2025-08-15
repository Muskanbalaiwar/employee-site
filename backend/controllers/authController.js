const bcrypt = require("bcryptjs");
const { createEmployee, findByEmail } = require("../models/employeeModel");
const { issueToken } = require("../config/jwt");

async function register(req, res) {
  const { name, email, password } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 25);

    await createEmployee(name, email, hashed, expiryDate);
    res.json({ message: "Registered successfully" });
  } catch (err) {
    res.status(400).json({ error: "Email already exists" });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  const emp = await findByEmail(email);
  if (!emp) return res.status(400).json({ message: "User not found" });

  if (new Date() > emp.password_expiry) {
    return res.status(403).json({ message: "Password expired. Please reset." });
  }

  const valid = await bcrypt.compare(password, emp.password);
  if (!valid) return res.status(400).json({ message: "Invalid password" });

  const token = issueToken({ id: emp.id, email: emp.email, lastActivity: Date.now() });
  res.setHeader("x-refresh-token", token);
  res.json({ token });
}

module.exports = { register, login };
