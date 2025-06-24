const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password", // mot de passe en clair
  database: "test"
});

function query(sql, callback) {
  connection.query(sql, callback);
}

module.exports = { query };
