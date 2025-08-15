const express = require("express");
const router = express.Router();
const { fetchTopSalaries } = require("../controllers/salaryController");
const { authenticate } = require("../middlewares/authMiddleware");

router.get("/top-salaries", authenticate, fetchTopSalaries);

module.exports = router;
