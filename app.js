const express = require("express");
const hbs = require("express-handlebars");

const server = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(3000);
