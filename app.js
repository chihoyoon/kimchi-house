const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const index = require("./lib/index");
const menu = require("./lib/menu");
const blog = require("./lib/blog");
const admin_menu = require("./lib/admin_menu");
const admin_blog = require("./lib/admin_blog");
const admin_delivery = require("./lib/admin_delivery");

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

    if (results.length === 0) {
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
  admin_menu._body(req, res);
});

app.post("/admin/menu/price_modify", (req, res) => {
  db.query(
    `UPDATE menu SET price=${req.body.price} Where id=${req.body.id}`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/menu");
    }
  );
});

app.post("/admin/menu/modify", (req, res) => {
  db.query(
    `UPDATE menu SET class_id=${req.body.class_id}, menu='${req.body.menu}', price=${req.body.price}, image='${req.body.image}', comment='${req.body.comment}' Where id=${req.body.id}`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/menu");
    }
  );
});

app.post("/admin/menu/delete", (req, res) => {
  db.query(`DELETE FROM menu Where id=${req.body.id}`, function (err, result) {
    if (err) throw err;
    res.redirect("/admin/menu");
  });
});

app.post("/admin/menu/create", (req, res) => {
  db.query(
    `INSERT INTO menu (class_id, menu, price, image, comment) VALUES (${req.body.class_id}, '${req.body.menu}', ${req.body.price}, '${req.body.image}', '${req.body.comment}')`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/menu");
    }
  );
});

app.get("/admin/blog", (req, res) => {
  admin_blog._body(req, res);
});

var _blog = [];

app.post("/admin/blog", (req, res) => {
  db.query(`SELECT * FROM blog WHERE id = ${req.body.id}`, function (
    err,
    results
  ) {
    if (err) throw err;
    _blog.push(`<div class="form-row">
                    <div class="col-sm-3">
                        <input type="text" readonly class="form-control" name="id" value="${results[0].id}" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" name="tittle" value="${results[0].tittle}" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <textarea class="form-control" name="description">${results[0].description}</textarea>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                      <input type="date" class="form-control" name="date" value="${results[0].date}" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" name="author" value="${results[0].author}" />
                    </div>
                    <div class="col">
                        <button type="submit" class="btn btn-primary col-md">MODIFY</button>
                    </div>
                </div>`);

    res.redirect("/admin/blog/modify");
  });
});

app.get("/admin/blog/modify", (req, res) => {
  res.render("admin_blog_modify", {
    _blog: _blog,
  });
});

app.post("/admin/blog/modify", (req, res) => {
  db.query(
    `UPDATE blog SET tittle='${req.body.tittle}', author='${req.body.author}', date='${req.body.date}', description='${req.body.description}' Where id=${req.body.id}`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/blog");
    }
  );
});

app.get("/admin/blog/create", (req, res) => {
  res.render("admin_blog_create");
});

app.post("/admin/blog/create", (req, res) => {
  db.query(
    `INSERT INTO blog (tittle, author, date, description) VALUES (${req.body.tittle}, '${req.body.author}', now(), '${req.body.description}')`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/blog");
    }
  );
});

app.post("/admin/blog/delete", (req, res) => {
  db.query(`DELETE FROM blog Where id=${req.body.id}`, function (err, result) {
    if (err) throw err;
    res.redirect("/admin/blog");
  });
});

app.get("/admin/delivery", (req, res) => {
  admin_delivery._body(req, res);
});

app.post("/admin/delivery/modify", (req, res) => {
  db.query(
    `UPDATE delivery_service SET service='${req.body.service}', website='${req.body.website}' Where id=${req.body.id}`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/delivery");
    }
  );
});

app.post("/admin/delivery/delete", (req, res) => {
  db.query(`DELETE FROM menu Where id=${req.body.id}`, function (err, result) {
    if (err) throw err;
    res.redirect("/admin/delivery");
  });
});

app.post("/admin/delivery/create", (req, res) => {
  db.query(
    `INSERT INTO delivery_service (service, website) VALUES ('${req.body.service}', '${req.body.website}')`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/delivery");
    }
  );
});

app.use((req, res) => {
  res.render("404");
});

app.listen(3000);
