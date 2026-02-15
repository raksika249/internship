const jwt = require("jsonwebtoken");

const generateToken = (payload, expires = "1d") => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expires
  });
};

module.exports = generateToken;
