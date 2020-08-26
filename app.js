const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app = express();

const index = require("./lib/index");
const menu = require("./lib/menu");
const blog = require("./lib/blog");
const a_menu = require("./lib/admin_menu");
const a_menu_p = require("./lib/admin_menu_post");
const a_menu_m = require("./lib/admin_menu_modify");
const a_menu_d = require("./lib/admin_menu_delete");
const a_menu_c = require("./lib/admin_menu_create");
const a_blog = require("./lib/admin_blog");
const a_blog_p = require("./lib/admin_blog_post");
const a_blog_m = require("./lib/admin_blog_modify");
const a_blog_c = require("./lib/admin_menu_create");
const a_blog_d = require("./lib/admin_blog_delete");
const a_delivery = require("./lib/admin_delivery");
const a_delivery_m = require("./lib/admin_delivery_modify");
const a_delivery_d = require("./lib/admin_delvery_delete");
const a_delivery_c = require("./lib/admin_delivery_create");

const db = require("./lib/db");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

var _blog = [];
var _menu = [];

app.get("/", (req, res) => {
  index._body(req, res);
});

app.get("/menu", (req, res) => {
  menu._body(req, res);
});

app.get("/blog", (req, res) => {
  blog._body(req, res);
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  db.query("SELECT * from user", function (error, results) {
    if (error) throw error;

    if (compareSync(username, results[0].username) === 0) {
      res.send("Cannot find username");
    } else {
      if (compareSync(password, results[0].password)) {
        res.send("success");
      } else {
        res.send("Password incorrect");
      }
    }
  });
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

app.get("/admin/menu", (req, res) => {
  a_menu._body(req, res);
});

app.post("/admin/menu", (req, res) => {
  a_menu_p._body(req, res);
});

app.post("/admin/menu/create", (req, res) => {
  a_menu_c._body(req, res);
});

app.get("/admin/menu/modify", (req, res) => {
  res.render("admin_menu_modify", {
    _menu: _menu,
  });
});

app.post("/admin/menu/modify", (req, res) => {
  a_menu_m._body(req, res);
});

app.post("/admin/menu/delete", (req, res) => {
  a_menu_d._body(req, res);
});

app.get("/admin/blog", (req, res) => {
  a_blog._body(req, res);
});

app.post("/admin/blog", (req, res) => {
  a_blog_p._body(req, res);
});

app.get("/admin/blog/create", (req, res) => {
  res.render("admin_blog_create");
});

app.post("/admin/blog/create", (req, res) => {
  a_blog_c._body(req, res);
});

app.get("/admin/blog/modify", (req, res) => {
  res.render("admin_blog_modify", {
    _blog: _blog,
  });
});

app.post("/admin/blog/modify", (req, res) => {
  a_blog_m._body(req, res);
});

app.post("/admin/blog/delete", (req, res) => {
  a_blog_d._body(req, res);
});

app.get("/admin/delivery", (req, res) => {
  a_delivery._body(req, res);
});

app.post("/admin/delivery/create", (req, res) => {
  a_delivery_c._body(req, res);
});

app.post("/admin/delivery/modify", (req, res) => {
  a_delivery_m._body(req, res);
});

app.post("/admin/delivery/delete", (req, res) => {
  a_delivery_d._body(req, res);
});

app.use((req, res) => {
  res.render("404");
});

app.listen(3000);
