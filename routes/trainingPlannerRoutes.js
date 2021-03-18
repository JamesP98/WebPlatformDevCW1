const express = require("express");
const controller = require("../controllers/trainingPlannerControllers");
const router = express.Router();

router.get("/", controller.landing_page);
router.get("/new", controller.show_new_entries);
router.post("/new", controller.post_new_entry);

router.use(function (req, res) {
  res.status(404);
  res.type("text/plain");
  res.send("404 Not found.");
});

router.use(function (err, req, res, next) {
  res.status(500);
  res.type("text/plain");
  res.send("Internal Server Error.");
});

module.exports = router;
