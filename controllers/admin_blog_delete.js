const db = require("./db");

exports._body = function (req, res) {
  db.query(`DELETE FROM blog Where id=${req.body.id}`, function (err, result) {
    if (err) throw err;
    res.redirect("/admin/blog");
  });
};
