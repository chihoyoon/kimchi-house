const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const admin_menu = require("../controllers/admin_menu");
const admin_menu_post = require("../controllers/admin_menu_post");
const admin_menu_modify = require("../controllers/admin_menu_modify");
const admin_menu_delete = require("../controllers/admin_menu_delete");
const admin_menu_create = require("../controllers/admin_menu_create");
const admin_blog = require("../controllers/admin_blog");
const admin_blog_post = require("../controllers/admin_blog_post");
const admin_blog_modify = require("../controllers/admin_blog_modify");
const admin_blog_create = require("../controllers/admin_blog_create");
const admin_blog_delete = require("../controllers/admin_blog_delete");
const admin_delivery = require("../controllers/admin_delivery");
const admin_delivery_modify = require("../controllers/admin_delivery_modify");
const admin_delivery_delete = require("../controllers/admin_delvery_delete");
const admin_delivery_create = require("../controllers/admin_delivery_create");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  if (req.session.Logined) {
    res.render("admin");
  } else {
    res.redirect("../");
  }
});

router.get("/menu", (req, res) => {
  if (req.session.Logined) {
    admin_menu._body(req, res);
  } else {
    res.redirect("../");
  }
});

router.post("/menu", (req, res) => {
  admin_menu_post._body(req, res);
});

router.get("/menu/create", (req, res) => {
  res.render("admin_menu_create");
});

router.post("/menu/create", (req, res) => {
  admin_menu_create._body(req, res);
});

router.post("/menu/modify", (req, res) => {
  admin_menu_modify._body(req, res);
});

router.post("/menu/delete", (req, res) => {
  admin_menu_delete._body(req, res);
});

router.get("/blog", (req, res) => {
  if (req.session.Logined) {
    admin_blog._body(req, res);
  } else {
    res.redirect("../");
  }
});

router.post("/blog", (req, res) => {
  admin_blog_post._body(req, res);
});

router.get("/blog/create", (req, res) => {
  res.render("admin_blog_create");
});

router.post("/blog/create", (req, res) => {
  admin_blog_create._body(req, res);
});

router.post("/blog/modify", (req, res) => {
  admin_blog_modify._body(req, res);
});

router.post("/blog/delete", (req, res) => {
  admin_blog_delete._body(req, res);
});

router.get("/delivery", (req, res) => {
  if (req.session.Logined) {
    admin_delivery._body(req, res);
  } else {
    res.redirect("../");
  }
});

router.post("/delivery/create", (req, res) => {
  admin_delivery_create._body(req, res);
});

router.post("/delivery/modify", (req, res) => {
  admin_delivery_modify._body(req, res);
});

router.post("/delivery/delete", (req, res) => {
  admin_delivery_delete._body(req, res);
});

module.exports = router;
