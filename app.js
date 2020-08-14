const express = require("express");
const hbs = require("express-handlebars");
const db = require("./lib/db");

const app = express();

// mysql
// db.query("SELECT * from menu", function (error, results, fields) {
//   if (error) {
//     console.log(error);
//   }
//   console.log(results);
// });

// db.end();
//mysql

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
  var name = [];
  var weblink = [];

  var delivery = [];

  db.query("SELECT * from delivery_service", function (error, results) {
    if (error) throw error;

    var service = results;

    for (let i = 0; i < service.length; i++) {
      name.push(service[i].service_name);
      weblink.push(service[i].website);

      delivery[i] = `<a href="${weblink[i]}" target="_blank">${name[i]}</a>`;
    }

    res.render("index", {
      delivery: delivery,
    });
  });

  db.end();
});

app.get("/menu", (req, res) => {
  res.render("menu");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.use((req, res) => {
  res.writeHead(404);
});

app.listen(3000);
