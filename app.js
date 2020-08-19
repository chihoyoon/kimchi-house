const express = require("express");
const hbs = require("express-handlebars");
const index = require("./lib/index");
const menu = require("./lib/menu");
const blog = require("./lib/blog");

const db = require("./lib/db");
// db.query("SELECT * FROM delivery_service", function (error, results) {
//   if (error) throw error;

//   var delivery = [];

//   for (let i = 0; i < results.length; i++) {
//     delivery[
//       i
//     ] = `<a href="${results[i].website}" target="_blank">${results[i].service_name}</a>`;
//   }
//   res.render("index", {
//     delivery: delivery,
//   });
// });
// db.end();

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

app.use("/login", (req, res) => {
  res.render("login");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.use((req, res) => {
  res.render("404");
});

app.listen(3000);
