const { verifyToken, issueToken } = require("../config/jwt");

const INACTIVITY_MS = 10 * 60 * 1000; // 10 min

function authenticate(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  verifyToken(token, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });

    const now = Date.now();
    if (!decoded.lastActivity || now - decoded.lastActivity > INACTIVITY_MS) {
      return res.status(401).json({ message: "Session expired due to inactivity" });
    }

    const refreshed = issueToken({ id: decoded.id, email: decoded.email, lastActivity: now });
    res.setHeader("x-refresh-token", refreshed);

    req.user = decoded;
    next();
  });
}

module.exports = { authenticate };
