const db = require("./db");

exports._body = function (req, res) {
  db.query("SELECT * FROM blog", function (error, results) {
    if (error) throw error;

    var blog = [];

    for (let i = 0; i < results.length; i++) {
      blog[i] = ` <tr>
                    <td>${results[i].id}</td>
                    <td>${results[i].tittle}</td>
                    <td>${results[i].author}</td>
                    <td>${results[i].date}</td>
                </tr>`;
    }
    blog.reverse();
    res.render("admin_blog", {
      blog: blog,
    });
  });
};
