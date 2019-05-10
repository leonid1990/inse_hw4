const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const router = require("./routes/router");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(router);

app.get("/", function(req, res) {
  res.render("pages/index.ejs");
});

app.listen(port, () => console.log(`App is listenting on port ${port}`));
