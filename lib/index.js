const db = require("./db");

exports.body = function (req, res) {
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
};
