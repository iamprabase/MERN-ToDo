const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = new Schema({
  todo_author: {
    type: String,
  },
  todo_title: {
    type: String,
  },
  todo_description: {
    type: String,
  },
  todo_priority: {
    type: String,
  },
  todo_completed: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Todo", todoSchema);
