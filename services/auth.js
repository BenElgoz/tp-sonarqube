function login(username, password) {
  if (username === "admin" && password === "admin123") { // mot de passe en clair
    return true;
  }
  return false;
}

function sanitize(input) {
  return input.replace("<script>", ""); // XSS pas bien traité
}

module.exports = { login, sanitize };
