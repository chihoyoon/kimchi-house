const db = require("./db");

exports._body = function (req, res) {
  db.query(`SELECT * FROM blog WHERE id = ${req.body.id}`, function (
    err,
    results
  ) {
    if (err) throw err;
    _blog.push(`<div class="form-row">
                        <div class="col-sm-3">
                            <input type="text" readonly class="form-control" name="id" value="${results[0].id}" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="tittle" value="${results[0].tittle}" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <textarea class="form-control" name="description">${results[0].description}</textarea>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                          <input type="date" class="form-control" name="date" value="${results[0].date}" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" name="author" value="${results[0].author}" />
                        </div>
                        <div class="col">
                            <button type="submit" class="btn btn-primary col-md">MODIFY</button>
                        </div>
                    </div>`);

    res.redirect("/admin/blog/modify");
  });
};
