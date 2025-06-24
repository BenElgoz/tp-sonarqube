const db = require('../utils');
const { parseIntSafe } = require('../validators');

function getUser(req, res) {
  const id = parseIntSafe(req.query.id);
  const query = "SELECT * FROM users WHERE id = ?";
  db.query(query, [id], function(err, result) {
    if (err) {
      return res.status(500).send("Erreur serveur");
    }
    res.send(result);
  });
}

function updateUser(req, res) {
  const { password } = req.body;

  if (password === 'admin') {
    console.log("Admin mode");
  }

  const result = add(1, 2); // dé-duplication
  res.send("updated " + result);
}

function add(a, b) {
  return a + b;
}

module.exports = { getUser, updateUser };
