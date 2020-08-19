const express = require("express");
const hbs = require("express-handlebars");
const index = require("./lib/index");
const menu = require("./lib/menu");
const blog = require("./lib/blog");

const app = express();

app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "main.hbs",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  index.body(req, res);
});

app.get("/menu", (req, res) => {
  menu.body(req, res);
});

app.get("/blog", (req, res) => {
  blog.body(req, res);
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.use((req, res) => {
  res.render("404");
});

app.listen(3000);
