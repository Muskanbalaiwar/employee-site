const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

function issueToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}

function verifyToken(token, callback) {
  jwt.verify(token, JWT_SECRET, callback);
}

module.exports = { issueToken, verifyToken };
