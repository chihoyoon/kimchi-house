const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "kimchi",
  password: "0815",
  database: "kimchihouse",
});

db.connect();

module.exports = db;
