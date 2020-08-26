const db = require("./db");

exports._body = function (req, res) {
  db.query(
    `INSERT INTO menu (class_id, menu, price, image, comment) VALUES (${req.body.class_id}, '${req.body.menu}', ${req.body.price}, '${req.body.image}', '${req.body.comment}')`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/menu");
    }
  );
};
