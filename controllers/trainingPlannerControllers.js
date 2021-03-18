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

exports.show_new_entries = function (req, res) {
  res.render("newEntry", {
    title: "Training Planner",
  });
};

exports.post_new_entry = function (req, res) {
  console.log("processing post-new_entry controller");
  if (!req.body.exercise) {
    response.status(400).send("You must enter an exercise...");
    return;
  }
  db.addEntry(req.body.exercise, req.body.day, req.body.achievement);
  res.redirect("/");
};
