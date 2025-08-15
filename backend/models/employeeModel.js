const pool = require("../config/db");

async function createEmployee(name, email, hashedPassword, expiryDate) {
  const sql = "INSERT INTO employees (name, email, password, password_expiry) VALUES (?, ?, ?, ?)";
  await pool.execute(sql, [name, email, hashedPassword, expiryDate]);
}

async function findByEmail(email) {
  const [rows] = await pool.execute("SELECT * FROM employees WHERE email = ?", [email]);
  return rows[0];
}

module.exports = { createEmployee, findByEmail };
