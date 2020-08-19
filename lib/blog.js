const db = require("./db");

exports.body = function (req, res) {
  db.query("SELECT * FROM blog", function (error, results) {
    if (error) throw error;

    var blog = [];

    for (let i = 0; i < results.length; i++) {
      blog[i] = `<h1 class="text-center">${results[i].tittle}</h1>
                      <h5>${results[i].author}</h5>
                      <h6>${results[i].date}</h6>
                      <hr class="bg-secondary">
                      <p>${results[i].description}</p>`;
    }
    blog.reverse();
    res.render("blog", {
      blog: blog,
    });
  });
  // db.end();
};
