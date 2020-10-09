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
          var menu_class_1 = `${results[i].class_name}(${results[i].class_id})`;
          menu_1[i] = `<tr>
                            <td>${results[i].id}</td>               
                            <td>${results[i].menu}</td>
                            <td>${results[i].price}</td>
                            <td>${results[i].comment}</td>
                            <td>${results[i].image}</td>
                        </tr>`;
        }

        if (results[i].class_id === 2) {
          var menu_class_2 = `${results[i].class_name}(${results[i].class_id})`;
          menu_2[i] = `<tr>
                            <td>${results[i].id}</td>               
                            <td>${results[i].menu}</td>
                            <td>${results[i].price}</td>
                            <td>${results[i].comment}</td>
                            <td>${results[i].image}</td>
                        </tr>`;
        }

        if (results[i].class_id === 3) {
          var menu_class_3 = `${results[i].class_name}(${results[i].class_id})`;
          menu_3[i] = `<tr>
                            <td>${results[i].id}</td>               
                            <td>${results[i].menu}</td>
                            <td>${results[i].price}</td>
                            <td>${results[i].comment}</td>
                            <td>${results[i].image}</td>
                        </tr>`;
        }

        if (results[i].class_id === 4) {
          var menu_class_4 = `${results[i].class_name}(${results[i].class_id})`;
          menu_4[i] = `<tr>
                            <td>${results[i].id}</td>               
                            <td>${results[i].menu}</td>
                            <td>${results[i].price}</td>
                            <td>${results[i].comment}</td>
                            <td>${results[i].image}</td>
                        </tr>`;
        }

        if (results[i].class_id === 5) {
          var menu_class_5 = `${results[i].class_name}(${results[i].class_id})`;
          menu_5[i] = `<tr>
                            <td>${results[i].id}</td>               
                            <td>${results[i].menu}</td>
                            <td>${results[i].price}</td>
                            <td>${results[i].comment}</td>
                            <td>${results[i].image}</td>
                        </tr>`;
        }

        if (results[i].class_id === 6) {
          var menu_class_6 = `${results[i].class_name}(${results[i].class_id})`;
          menu_6[i] = `<tr>
                            <td>${results[i].id}</td>               
                            <td>${results[i].menu}</td>
                            <td>${results[i].price}</td>
                            <td>${results[i].comment}</td>
                            <td>${results[i].image}</td>
                        </tr>`;
        }

        if (results[i].class_id === 7) {
          var menu_class_7 = `${results[i].class_name}(${results[i].class_id})`;
          menu_7[i] = `<tr>
                            <td>${results[i].id}</td>               
                            <td>${results[i].menu}</td>
                            <td>${results[i].price}</td>
                            <td>${results[i].comment}</td>
                            <td>${results[i].image}</td>
                        </tr>`;
        }

        if (results[i].class_id === 8) {
          var menu_class_8 = `${results[i].class_name}(${results[i].class_id})`;
          menu_8[i] = `<tr>
                            <td>${results[i].id}</td>               
                            <td>${results[i].menu}</td>
                            <td>${results[i].price}</td>
                            <td>${results[i].comment}</td>
                            <td>${results[i].image}</td>
                        </tr>`;
        }

        if (results[i].class_id === 9) {
          var menu_class_9 = `${results[i].class_name}(${results[i].class_id})`;
          menu_9[i] = `<tr>
                            <td>${results[i].id}</td>               
                            <td>${results[i].menu}</td>
                            <td>${results[i].price}</td>
                            <td>${results[i].comment}</td>
                            <td>${results[i].image}</td>
                        </tr>`;
        }
      }
      res.render("admin_menu", {
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
};
