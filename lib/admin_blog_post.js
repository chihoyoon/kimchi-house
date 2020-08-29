const db = require("./db");
const _blog = [];

exports._body = function (req, res) {
  db.query(`SELECT * FROM blog WHERE id = ${req.body.id}`, function (
    err,
    results
  ) {
    if (err) throw err;
    _blog.push(`<div class="form-row">
                        <div class="col-1">
                            <input type="text" readonly class="form-control" name="id" value="${results[0].id}" />
                        </div>
                        <div class="col-8">
                            <input type="text" class="form-control" name="tittle" value="${results[0].tittle}" />
                        </div>
                        <div class="col-3">
                            <input type="text" class="form-control" name="author" value="${results[0].author}" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <textarea class="form-control" rows="20" name="description">${results[0].description}</textarea>
                        </div>
                    </div>
                    <br><br>
                    <div class="form-row"> 
                        <div class="col text-center">
                            <button type="submit" class="btn btn-primary">MODIFY</button>
                        </div>
                    </div>`);

    res.render("admin_blog_modify", {
      _blog: _blog,
    });
  });
};
