const db = require("./db");

exports._body = function (req, res) {
  db.query(
    `INSERT INTO blog (tittle, author, date, description) VALUES (${req.body.tittle}, '${req.body.author}', now(), '${req.body.description}')`,
    function (err, result) {
      if (err) throw err;
      res.redirect("/admin/blog");
    }
  );
};
