const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const babel = require("babel-core");
const babylon = require("babylon");
const util = require("util");
require("./cycle");

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

require("./routes/get/views")(app, babel, util);

app.listen(port, () => {
  console.log("Web server listening on port " + port);
});
