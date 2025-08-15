const { getTopSalaries } = require("../models/salaryModel");

async function fetchTopSalaries(req, res) {
  const salaries = await getTopSalaries();
  res.json(salaries);
}

module.exports = { fetchTopSalaries };
