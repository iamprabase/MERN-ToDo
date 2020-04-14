const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
let dbConfig = require("./database/db");

//Routes
const todoRoutes = require("./routes/todo.route");

//DB Connection
mongoose.Promise = global.Promise;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(dbConfig.db, options).then(
  () => {
    console.log("Database sucessfully connected!");
  },
  (error) => {
    console.log("Could not connect to database : " + error);
  }
);

app.use(cors());
app.use(bodyParser.json());
app.use("/todos", todoRoutes);

app.listen(PORT, function () {
  console.log("Server Running " + PORT);
});
