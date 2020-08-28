const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const loginRouter = require("./routes/login");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "main.hbs",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

app.use("/", indexRouter);

app.use("/login", loginRouter);

app.use("/admin", adminRouter);

app.get("/logout", (req, res) => {
  delete req.session.username;
  res.redirect("/");
});

app.use((req, res) => {
  res.render("404");
});

app.listen(3000);
