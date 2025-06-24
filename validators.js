function sanitizeInput(input) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function parseIntSafe(val) {
  const parsed = parseInt(val, 10);
  return isNaN(parsed) ? 0 : parsed;
}

module.exports = { sanitizeInput, parseIntSafe };
