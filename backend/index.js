const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/authRoute");
const salaryRoutes = require("./routes/salaryRoute");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/", authRoutes);
app.use("/", salaryRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
