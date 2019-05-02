const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.render("pages/index.ejs");
});

app.listen(port, () => console.log(`App is listenting on port ${port}`));
