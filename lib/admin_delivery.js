const db = require("./db");

exports.body = function (req, res) {
  db.query("SELECT * FROM delivery_service", function (error, results) {
    if (error) throw error;

    var delivery = [];

    for (let i = 0; i < results.length; i++) {
      delivery[i] = ` <tr>
                          <td>${results[i].id}</td>
                          <td>${results[i].service}</td>
                          <td>${results[i].website}</td>
                      </tr>`;
    }
    res.render("admin_delivery", {
      delivery: delivery,
    });
  });
};
