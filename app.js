const express = require("express");
const hbs = require("express-handlebars");
const db = require("./lib/db");

const app = express();

//  mysql
// db.query("SELECT * from menu", function (error, results, fields) {
//   if (error) throw error;

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
  db.query("SELECT * FROM delivery_service", function (error, results) {
    if (error) throw error;

    var name = [];
    var weblink = [];
    var delivery = [];

    for (let i = 0; i < results.length; i++) {
      name.push(results[i].service_name);
      weblink.push(results[i].website);

      delivery[i] = `<a href="${weblink[i]}" target="_blank">${name[i]}</a>`;
    }
    res.render("index", {
      delivery: delivery,
    });
  });

  db.end();
});

app.get("/menu", (req, res) => {
  db.query(
    "SELECT * FROM menu_class, menu WHERE menu_class.menu_class_id=menu.menu_class_id ",
    function (error, results) {
      if (error) throw error;

      var menu_1 = [];
      var menu_name_1 = [];
      var price_1 = [];
      var comment_1 = [];
      var menu_img_1 = [];

      for (let i = 0; i < results.length; i++) {
        if (results[i].menu_class_id === 1) {
          var menu_class_1 = results[i].menu_class_name;

          menu_name_1.push(results[i].menu_name);
          price_1.push(results[i].price);
          comment_1.push(results[i].comment);
          menu_img_1.push(results[i].image_file_name);
          menu_1[i] = `<table class="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col" colspan="4">
                                    <h3> ${menu_class_1} </h3>
                                </th>
                            </tr>
                        </thead>
                
                        <tbody>
                           <tr>
                            <th scope="row" rowlspan="2">
                              <h4>${menu_name_1[i]}</h4>
                             </th>
                            <td>
                              <h5>\$${price_1[i]}</h5>
                            </td>
                            <td rowspan="2"><img src="./img/${menu_img_1[i]}" class="rounded mx-auto d-block" width="150" height="150">
                            </td>
                          </tr>
                           <tr>
                             <td colspan="2">${comment_1[i]}</td>
                          </tr>
                        </tbody>
                      </table>`;
        }
      }
      res.render("menu", {
        menu_1: menu_1,
      });
    }
  );

  db.end();
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
