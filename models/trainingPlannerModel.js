const nedb = require("nedb");

class trainingPlanner {
  constructor(dbFilePath) {
    if (dbFilePath) {
      this.db = new nedb({ filename: dbFilePath, autoload: true });
      console.log("DB connected to " + dbFilePath);
    } else {
      this.db = new nedb();
    }
  }

  init() {
    this.db.insert({
      Exercise4: "Get out for a run",
      Day4: "Sunday",
      Achievement4: "",
    });
    console.log("");

    this.db.insert({
      Exercise3: "Do a workout with a friend over facetime",
      Day3: "Saturday",
      Achievement3: "",
    });
    console.log("");

    this.db.insert({
      Exercise2: "Complete an online workout",
      Day2: "Wednesday",
      Achievement2: "",
    });
    console.log("");

    this.db.insert({
      Exercise: "Get out for a walk",
      Day: "Monday",
      Achievement: "",
    });
    console.log("");
  }

  getAllEntries() {
    return new Promise((resolve, reject) => {
      this.db.find({}, function (err, entries) {
        if (err) {
          reject(err);
        } else {
          resolve(entries);

          console.log("function all() returns: ", entries);
        }
      });
    });
  }
}

module.exports = trainingPlanner;
