const trainingPlannerDAO = require("../models/trainingPlannerModel");

const db = new trainingPlannerDAO();

exports.landing_page = function (req, res) {
  db.init();
  db.getAllEntries()
    .then((list) => {
      res.render("entries", {
        title: "Training Planner",
        entries: list,
      });
      console.log("promise resolved");
    })
    .catch((err) => {
      console.log("promised rejected", err);
    });
};

exports.new_entry = function (req, res) {
  res.send("");
};
