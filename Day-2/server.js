const app = require("./src/app");
const mongoose = require("mongoose");
function connectTodb() {
  mongoose
    .connect(
      "mongodb+srv://heycoder23_db_user:NjJVv4vwLH7S8KEk@cluster0.p5cos5i.mongodb.net/day-2",
    )
    .then(() => {
      console.log("connected to Database ");
    });
}
connectTodb()

app.listen(3000, () => {
  console.log("Server Start Successfully");
});
