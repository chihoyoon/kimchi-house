const db = require("./db");

exports._body = function (req, res) {
  db.query(
    `INSERT INTO delivery_service (service, website) VALUES ('${req.body.service}', '${req.body.website}')`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/delivery");
    }
  );
};
