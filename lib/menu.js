const db = require("./db");

exports._body = function (req, res) {
  db.query(
    "SELECT * FROM menu_class, menu WHERE menu_class.class_id=menu.class_id ",
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
        if (results[i].class_id === 1) {
          var menu_class_1 = results[i].class_name;
          menu_1[i] = `<tr>
                            <th scope="row" rowlspan="2">
                                <h4>${results[i].menu}</h4>
                            </th>
                            <td>
                                <h5>\$${results[i].price}</h5>
                            </td>
                            <td rowspan="2"><img src="./img/${results[i].image}" class="rounded mx-auto d-block" width="150" height="150">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">${results[i].comment}</td>
                        </tr>`;
        }

        if (results[i].class_id === 2) {
          var menu_class_2 = results[i].class_name;
          menu_2[i] = `<tr>
                            <th scope="row" rowlspan="2">
                                <h4>${results[i].menu}</h4>
                            </th>
                            <td>
                                <h5>\$${results[i].price}</h5>
                            </td>
                            <td rowspan="2"><img src="./img/${results[i].image}" class="rounded mx-auto d-block" width="150" height="150">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">${results[i].comment}</td>
                        </tr>`;
        }

        if (results[i].class_id === 3) {
          var menu_class_3 = results[i].class_name;
          menu_3[i] = `<tr>
                            <th scope="row" rowlspan="2">
                                <h4>${results[i].menu}</h4>
                            </th>
                            <td>
                                <h5>\$${results[i].price}</h5>
                            </td>
                            <td rowspan="2"><img src="./img/${results[i].image}" class="rounded mx-auto d-block" width="150" height="150">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">${results[i].comment}</td>
                        </tr>`;
        }

        if (results[i].class_id === 4) {
          var menu_class_4 = results[i].class_name;
          menu_4[i] = `<tr>
                            <th scope="row" rowlspan="2">
                                <h4>${results[i].menu}</h4>
                            </th>
                            <td>
                                <h5>\$${results[i].price}</h5>
                            </td>
                            <td rowspan="2"><img src="./img/${results[i].image}" class="rounded mx-auto d-block" width="150" height="150">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">${results[i].comment}</td>
                        </tr>`;
        }

        if (results[i].class_id === 5) {
          var menu_class_5 = results[i].class_name;
          menu_5[i] = `<tr>
                            <th scope="row" rowlspan="2">
                                <h4>${results[i].menu}</h4>
                            </th>
                            <td>
                                <h5>\$${results[i].price}</h5>
                            </td>
                            <td rowspan="2"><img src="./img/${results[i].image}" class="rounded mx-auto d-block" width="150" height="150">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">${results[i].comment}</td>
                        </tr>`;
        }

        if (results[i].class_id === 6) {
          var menu_class_6 = results[i].class_name;
          menu_6[i] = `<tr>
                            <th scope="row" rowlspan="2">
                                <h4>${results[i].menu}</h4>
                            </th>
                            <td>
                                <h5>\$${results[i].price}</h5>
                            </td>
                            <td rowspan="2"><img src="./img/${results[i].image}" class="rounded mx-auto d-block" width="150" height="150">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">${results[i].comment}</td>
                        </tr>`;
        }

        if (results[i].class_id === 7) {
          var menu_class_7 = results[i].class_name;
          menu_7[i] = `<tr>
                            <th scope="row" rowlspan="2">
                                <h4>${results[i].menu}</h4>
                            </th>
                            <td>
                                <h5>\$${results[i].price}</h5>
                            </td>
                            <td rowspan="2"><img src="./img/${results[i].image}" class="rounded mx-auto d-block" width="150" height="150">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">${results[i].comment}</td>
                        </tr>`;
        }

        if (results[i].class_id === 8) {
          var menu_class_8 = results[i].class_name;
          menu_8[i] = `<tr>
                            <th scope="row" rowlspan="2">
                                <h4>${results[i].menu}</h4>
                            </th>
                            <td>
                                <h5>\$${results[i].price}</h5>
                            </td>
                            <td rowspan="2"><img src="./img/${results[i].image}" class="rounded mx-auto d-block" width="150" height="150">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">${results[i].comment}</td>
                        </tr>`;
        }

        if (results[i].class_id === 9) {
          var menu_class_9 = results[i].class_name;
          menu_9[i] = `<tr>
                            <th scope="row" rowlspan="2">
                                <h4>${results[i].menu}</h4>
                            </th>
                            <td>
                                <h5>\$${results[i].price}</h5>
                            </td>
                            <td rowspan="2"><img src="./img/${results[i].image}" class="rounded mx-auto d-block" width="150" height="150">
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

  //   db.end();
};
