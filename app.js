const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

const db = require("./lib/db");
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

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      path: "/admin",
      maxAge: 60000,
    },
  })
);

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

var users = [];
db.query("SELECT * from user", function (error, results) {
  if (error) throw error;
  for (let i = 0; i < results.length; i++) {
    users.push({
      username: results[i].username,
      password: results[i].password,
    });
  }
});

const findUser = (username, password) => {
  return users.find((v) => v.username === username && v.password === password);
};

const findUserIndex = (username, password) => {
  return users.findIndex(
    (v) => v.username === username && v.password === password
  );
};

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
  var _username = req.body.username;
  var _password = req.body.password;

  if (users[0].username === _username) {
    if (users[0].password === _password) {
      console.log("success");
    } else {
      console.log("Password incorrect");
    }
  } else {
    console.log("Cannot find username");
  }
});

app.get("/admin", (req, res) => {
  const sess = req.session;
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
