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
      Exercise1: "Get out for a walk",
      Day1: "Monday",
      Achievement: "",
    });
    console.log("");
  }

  addEntry(exercise, day, achievement) {
    var entry = {
      exercise: exercise,
      day: day,
      achievement: achievement,
      published: new Date().toISOString().split("T")[0],
    };
    console.log("entry created", entry);

    this.db.insert(entry, function (err, doc) {
      if (err) {
        console.log("Error inserting document", Day);
      } else {
        console.log("document inserted into the database", doc);
      }
    });
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
