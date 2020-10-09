const db = require("./db");

exports._body = function (req, res) {
  db.query(
    `UPDATE menu SET class_id=${req.body.class_id}, menu='${req.body.menu}', price=${req.body.price}, image='${req.body.image}', comment='${req.body.comment}' Where id=${req.body.id}`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/menu");
    }
  );
};
