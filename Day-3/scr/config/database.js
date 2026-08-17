const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose
    .connect(
      "mongodb+srv://heycoder23_db_user:RAJDBPASSWORD@cluster0.p5cos5i.mongodb.net/DAY-5",
    )
    .then(() => {
      console.log("connected to Database");
    });
};

module.exports = connectToDB;
