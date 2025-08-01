const jwt = require("jsonwebtoken");
const jwtAuthMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).send("Access Denied, no token provided");
  }
  
  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(401).send("Access Denied, no token provided");
  }
  
  try {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

const generateToken = (userData) => {
  return jwt.sign(userData, process.env.ACCESS_TOKEN, { expiresIn: "8h" });
};
module.exports = { jwtAuthMiddleware, generateToken };
