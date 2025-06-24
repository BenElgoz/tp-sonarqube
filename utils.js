require('dotenv').config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "test"
});

function query(sql, params, callback) {
  connection.query(sql, params, callback);
}

module.exports = { query };
