const pool = require("../config/db");

async function getTopSalaries(limit = 2) {
  const [rows] = await pool.execute(
    `SELECT s.amount, e.name
     FROM salaries s
     JOIN employees e ON s.emp_id = e.id
     ORDER BY s.amount DESC
     LIMIT ?`,
    [limit]
  );
  return rows;
}

module.exports = { getTopSalaries };
