const express = require("express");
const hbs = require("express-handlebars");
const db = require("./lib/db");

const app = express();

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

    var delivery = [];

    for (let i = 0; i < results.length; i++) {
      delivery[
        i
      ] = `<a href="${results[i].website}" target="_blank">${results[i].service_name}</a>`;
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
      var menu_2 = [];
      var menu_3 = [];
      var menu_4 = [];
      var menu_5 = [];
      var menu_6 = [];
      var menu_7 = [];
      var menu_8 = [];
      var menu_9 = [];

      for (let i = 0; i < results.length; i++) {
        if (results[i].menu_class_id === 1) {
          var menu_class_1 = results[i].menu_class_name;
          menu_1[i] = `<tr>
                        <th scope="row" rowlspan="2">
                            <h4>${results[i].menu_name}</h4>
                        </th>
                        <td>
                            <h5>\$${results[i].price}</h5>
                        </td>
                        <td rowspan="2"><img src="./img/${results[i].image_file_name}" class="rounded mx-auto d-block" width="150" height="150">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">${results[i].comment}</td>
                    </tr>`;
        }

        if (results[i].menu_class_id === 2) {
          var menu_class_2 = results[i].menu_class_name;
          menu_2[i] = `<tr>
                        <th scope="row" rowlspan="2">
                            <h4>${results[i].menu_name}</h4>
                        </th>
                        <td>
                            <h5>\$${results[i].price}</h5>
                        </td>
                        <td rowspan="2"><img src="./img/${results[i].image_file_name}" class="rounded mx-auto d-block" width="150" height="150">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">${results[i].comment}</td>
                    </tr>`;
        }

        if (results[i].menu_class_id === 3) {
          var menu_class_3 = results[i].menu_class_name;
          menu_3[i] = `<tr>
                        <th scope="row" rowlspan="2">
                            <h4>${results[i].menu_name}</h4>
                        </th>
                        <td>
                            <h5>\$${results[i].price}</h5>
                        </td>
                        <td rowspan="2"><img src="./img/${results[i].image_file_name}" class="rounded mx-auto d-block" width="150" height="150">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">${results[i].comment}</td>
                    </tr>`;
        }

        if (results[i].menu_class_id === 4) {
          var menu_class_4 = results[i].menu_class_name;
          menu_4[i] = `<tr>
                        <th scope="row" rowlspan="2">
                            <h4>${results[i].menu_name}</h4>
                        </th>
                        <td>
                            <h5>\$${results[i].price}</h5>
                        </td>
                        <td rowspan="2"><img src="./img/${results[i].image_file_name}" class="rounded mx-auto d-block" width="150" height="150">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">${results[i].comment}</td>
                    </tr>`;
        }

        if (results[i].menu_class_id === 5) {
          var menu_class_5 = results[i].menu_class_name;
          menu_5[i] = `<tr>
                        <th scope="row" rowlspan="2">
                            <h4>${results[i].menu_name}</h4>
                        </th>
                        <td>
                            <h5>\$${results[i].price}</h5>
                        </td>
                        <td rowspan="2"><img src="./img/${results[i].image_file_name}" class="rounded mx-auto d-block" width="150" height="150">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">${results[i].comment}</td>
                    </tr>`;
        }

        if (results[i].menu_class_id === 6) {
          var menu_class_6 = results[i].menu_class_name;
          menu_6[i] = `<tr>
                        <th scope="row" rowlspan="2">
                            <h4>${results[i].menu_name}</h4>
                        </th>
                        <td>
                            <h5>\$${results[i].price}</h5>
                        </td>
                        <td rowspan="2"><img src="./img/${results[i].image_file_name}" class="rounded mx-auto d-block" width="150" height="150">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">${results[i].comment}</td>
                    </tr>`;
        }

        if (results[i].menu_class_id === 7) {
          var menu_class_7 = results[i].menu_class_name;
          menu_7[i] = `<tr>
                        <th scope="row" rowlspan="2">
                            <h4>${results[i].menu_name}</h4>
                        </th>
                        <td>
                            <h5>\$${results[i].price}</h5>
                        </td>
                        <td rowspan="2"><img src="./img/${results[i].image_file_name}" class="rounded mx-auto d-block" width="150" height="150">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">${results[i].comment}</td>
                    </tr>`;
        }

        if (results[i].menu_class_id === 8) {
          var menu_class_8 = results[i].menu_class_name;
          menu_8[i] = `<tr>
                        <th scope="row" rowlspan="2">
                            <h4>${results[i].menu_name}</h4>
                        </th>
                        <td>
                            <h5>\$${results[i].price}</h5>
                        </td>
                        <td rowspan="2"><img src="./img/${results[i].image_file_name}" class="rounded mx-auto d-block" width="150" height="150">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">${results[i].comment}</td>
                    </tr>`;
        }

        if (results[i].menu_class_id === 9) {
          var menu_class_9 = results[i].menu_class_name;
          menu_9[i] = `<tr>
                        <th scope="row" rowlspan="2">
                            <h4>${results[i].menu_name}</h4>
                        </th>
                        <td>
                            <h5>\$${results[i].price}</h5>
                        </td>
                        <td rowspan="2"><img src="./img/${results[i].image_file_name}" class="rounded mx-auto d-block" width="150" height="150">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">${results[i].comment}</td>
                    </tr>`;
        }
      }
      res.render("menu", {
        menu_class_1: menu_class_1,
        menu_1: menu_1,
        menu_class_2: menu_class_2,
        menu_2: menu_2,
        menu_class_3: menu_class_3,
        menu_3: menu_3,
        menu_class_4: menu_class_4,
        menu_4: menu_4,
        menu_class_5: menu_class_5,
        menu_5: menu_5,
        menu_class_6: menu_class_6,
        menu_6: menu_6,
        menu_class_7: menu_class_7,
        menu_7: menu_7,
        menu_class_8: menu_class_8,
        menu_8: menu_8,
        menu_class_9: menu_class_9,
        menu_9: menu_9,
      });
    }
  );

  db.end();
});

app.get("/blog", (req, res) => {
  db.query("SELECT * FROM blog", function (error, results) {
    if (error) throw error;

    var blog = [];

    for (let i = 0; i < results.length; i++) {
      blog[i] = `<h1 class="text-center">${results[i].tittle}</h1>
                  <h5>${results[i].author}</h5>
                  <h6>${results[i].date}</h6>
                  <hr class="bg-secondary">
                  <p>${results[i].description}</p>`;
    }
    blog.reverse();
    res.render("blog", {
      blog: blog,
    });
  });
  db.end();
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

server.use((req, res) => {
  res.render("404");
});

app.listen(3000);
