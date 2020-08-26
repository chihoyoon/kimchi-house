const db = require("./db");

exports._body = function (req, res) {
  db.query(
    `UPDATE delivery_service SET service='${req.body.service}', website='${req.body.website}' Where id=${req.body.id}`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/delivery");
    }
  );
};
