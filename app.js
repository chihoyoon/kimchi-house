const express = require("express");
const hbs = require("express-handlebars");
const db = require("./lib/db");

const server = express();

// mysql
db.query("SELECT * from menu", function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

db.end();
//mysql

server.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout.hbs",
  })
);
server.set("view engine", "hbs");

server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => {
  res.render("index");
});

server.get("/menu", (req, res) => {
  res.render("menu");
});

server.get("/blog", (req, res) => {
  res.render("blog");
});

server.get("/contact", (req, res) => {
  res.render("contact");
});

server.use((req, res) => {
  res.writeHead(404);
});

server.listen(3000);
