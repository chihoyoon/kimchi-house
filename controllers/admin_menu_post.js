const db = require("./db");

exports._body = function (req, res) {
  db.query(`SELECT * FROM menu WHERE id = ${req.body.id}`, function (
    err,
    results
  ) {
    if (err) throw err;
    var _menu = `<div class="form-row">
                    <div class="col-1">
                        <input type="text" readonly class="form-control" name="id" value="${results[0].id}" />
                    </div>
                    <div class="col-1">
                        <input type="text" class="form-control" name="class_id" value="${results[0].class_id}" />
                    </div>
                    <div class="col-3">
                        <input type="text" class="form-control" name="menu" value="${results[0].menu}" />
                    </div>
                    <div class="col-1">
                        <input type="text" class="form-control" name="price" value="${results[0].price}" />
                    </div>
                    <div class="col-3">
                        <input type="text" class="form-control" name="comment" value="${results[0].comment}" />
                    </div>
                    <div class="col-2">
                        <input type="text" class="form-control" name="image" value="${results[0].image}" />
                    </div>
                    <div class="col-1">
                        <button type="submit" class="btn btn-primary">SUBMIT</button>
                    </div>
                </div>`;

    res.render("admin_menu_modify", {
      _menu: _menu,
    });
  });
};
