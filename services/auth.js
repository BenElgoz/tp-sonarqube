require('dotenv').config();
const bcrypt = require('bcrypt');
const { sanitizeInput } = require('../validators');

function login(username, password) {
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
  if (username === "admin" && bcrypt.compareSync(password, adminPasswordHash)) {
    return true;
  }
  return false;
}

function sanitize(input) {
  return sanitizeInput(input); // protection XSS via lib
}

module.exports = { login, sanitize };
