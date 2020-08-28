const express = require("express");
const router = express.Router();
const db = require("../lib/db");
const bodyParser = require("body-parser");

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

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  if (findUser(username, password)) {
    req.session.username = findUserIndex(username, password);
    req.session.Logined = true;
    res.redirect("/admin");
  } else {
    alert("Not valid");
    res.redirect("../");
  }
});

module.exports = router;
