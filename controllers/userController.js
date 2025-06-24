const db = require('../utils');

function getUser(req, res) {
  let id = req.query.id;
  let query = "SELECT * FROM users WHERE id = " + id; // SQL Injection possible
  db.query(query, function(err, result) {
    if (err) throw err;
    res.send(result);
  });
}

function updateUser(req, res) {
  if (req.body.password = 'admin') { // Erreur : = au lieu de ==
    console.log("Admin mode"); 
  }
  // fonction très longue et pas découpée
  let a = 1;
  let b = 2;
  let c = a + b;
  // répétition inutile
  let d = 1;
  let e = 2;
  let f = d + e;
  res.send("updated");
}

module.exports = { getUser, updateUser };
