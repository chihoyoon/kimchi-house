const db = require("./db");

exports._body = function (req, res) {
  db.query(
    `UPDATE blog SET tittle='${req.body.tittle}', author='${req.body.author}', date='${req.body.date}', description='${req.body.description}' Where id=${req.body.id}`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/blog");
    }
  );
};
