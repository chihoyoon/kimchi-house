const db = require("./db");

exports._body = function (req, res) {
  db.query(`SELECT * FROM menu WHERE id = ${req.body.id}`, function (
    err,
    results
  ) {
    if (err) throw err;
    _menu.push(`<div class="form-row">
                        <div class="col">
                            <input type="text" readonly class="form-control" name="id" value="${results[0].id}" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="class_id" value="${results[0].class_id}" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="menu" value="${results[0].menu}" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="price" value="${results[0].price}" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="comment" value="${results[0].comment}" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="image" value="${results[0].image}" />
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary col-md">MODIFY</button>
                        </div>
                    </div>`);

    res.redirect("/admin/blog/modify");
  });
};
