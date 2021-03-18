const express = require("express");
const path = require("path");
const app = express();
const public = path.join(__dirname, "public");
const router = require("./routes/trainingPlannerRoutes");
const mustache = require("mustache-express");
const bodyParser = require("body-parser");

app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("mustache", mustache());
app.set("view engine", "mustache");

app.listen(3000, () => {
  console.log("Server started on port 3000. Ctrl^c to quit.");
});
