const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const index = require("../controllers/index");
const menu = require("../controllers/menu");
const blog = require("../controllers/blog");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  index._body(req, res);
});

router.get("/menu", (req, res) => {
  menu._body(req, res);
});

router.get("/blog", (req, res) => {
  blog._body(req, res);
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
