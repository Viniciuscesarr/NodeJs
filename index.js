const express = require("express");
const app = express();
const conn = require("./db/conn");
const Task = require("./models/Taks");
const TaksRoutes = require("./routes/tasksRoute");

app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/tasks", TaksRoutes);
app.use(express.json());
app.use(express.static("public"));

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
