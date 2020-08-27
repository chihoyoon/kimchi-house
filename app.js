const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

const db = require("./lib/db");
const index = require("./lib/index");
const menu = require("./lib/menu");
const blog = require("./lib/blog");
const admin_menu = require("./lib/admin_menu");
const admin_menu_post = require("./lib/admin_menu_post");
const admin_menu_modify = require("./lib/admin_menu_modify");
const admin_menu_delete = require("./lib/admin_menu_delete");
const admin_menu_create = require("./lib/admin_menu_create");
const admin_blog = require("./lib/admin_blog");
const admin_blog_post = require("./lib/admin_blog_post");
const admin_blog_modify = require("./lib/admin_blog_modify");
const admin_blog_create = require("./lib/admin_menu_create");
const admin_blog_delete = require("./lib/admin_blog_delete");
const admin_delivery = require("./lib/admin_delivery");
const admin_delivery_modify = require("./lib/admin_delivery_modify");
const admin_delivery_delete = require("./lib/admin_delvery_delete");
const admin_delivery_create = require("./lib/admin_delivery_create");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
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
    var user = {
      username: results[i].username,
      password: results[i].password,
      role: results[i].role,
    };
    users.push(user);
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
  var username = req.body.username;
  var password = req.body.password;
  if (findUser(username, password)) {
    req.session.username = findUserIndex(username, password);
    req.session.Logined = true;
    res.redirect("/admin");
  } else {
    alert("Not valid");
    res.redirect("/");
  }
});

app.get("/logout", (req, res) => {
  delete req.session.username;
  res.redirect("/");
});

app.get("/admin", (req, res) => {
  if (req.session.Logined) {
    res.render("admin");
  } else {
    res.redirect("/");
  }
});

app.get("/admin/menu", (req, res) => {
  if (req.session.Logined) {
    admin_menu._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.post("/admin/menu", (req, res) => {
  if (req.session.Logined) {
    admin_menu_post._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.post("/admin/menu/create", (req, res) => {
  if (req.session.Logined) {
    admin_menu_create._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.get("/admin/menu/modify", (req, res) => {
  if (req.session.Logined) {
    res.render("admin_menu_modify", {
      _menu: _menu,
    });
  } else {
    res.redirect("/");
  }
});

app.post("/admin/menu/modify", (req, res) => {
  if (req.session.Logined) {
    admin_menu_modify._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.post("/admin/menu/delete", (req, res) => {
  if (req.session.Logined) {
    admin_menu_delete._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.get("/admin/blog", (req, res) => {
  if (req.session.Logined) {
    admin_blog._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.post("/admin/blog", (req, res) => {
  if (req.session.Logined) {
    admin_blog_post._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.get("/admin/blog/create", (req, res) => {
  if (req.session.Logined) {
    res.render("admin_blog_create");
  } else {
    res.redirect("/");
  }
});

app.post("/admin/blog/create", (req, res) => {
  if (req.session.Logined) {
    admin_blog_create._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.get("/admin/blog/modify", (req, res) => {
  if (req.session.Logined) {
    res.render("admin_blog_modify", {
      _blog: _blog,
    });
  } else {
    res.redirect("/");
  }
});

app.post("/admin/blog/modify", (req, res) => {
  if (req.session.Logined) {
    admin_blog_modify._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.post("/admin/blog/delete", (req, res) => {
  if (req.session.Logined) {
    admin_blog_delete._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.get("/admin/delivery", (req, res) => {
  if (req.session.Logined) {
    admin_delivery._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.post("/admin/delivery/create", (req, res) => {
  if (req.session.Logined) {
    admin_delivery_create._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.post("/admin/delivery/modify", (req, res) => {
  if (req.session.Logined) {
    admin_delivery_modify._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.post("/admin/delivery/delete", (req, res) => {
  if (req.session.Logined) {
    admin_delivery_delete._body(req, res);
  } else {
    res.redirect("/");
  }
});

app.use((req, res) => {
  res.render("404");
});

app.listen(3000);
