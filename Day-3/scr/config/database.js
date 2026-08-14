const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(
      "mongodb+srv://heycoder23_db_user:NjJVv4vwLH7S8KEk@cluster0.p5cos5i.mongodb.net/day-3",
    )
    .then(() => {
      console.log("connected to Database");
    });
};

module.exports = connectToDB;
