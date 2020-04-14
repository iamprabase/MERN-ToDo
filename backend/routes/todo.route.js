// const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

let todoSchema = require("../models/Todo");

// Get Todos
router.route("/").get((req, res, next) => {
  todoSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// CREATE Todo
router.route("/create-todo").post((req, res, next) => {
  todoSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Get Single Todo => Edit Page
router.route("/edit-todo/:id").get((req, res, next) => {
  let todoId = req.params.id;
  todoSchema.findById(todoId, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Todo
router.route("/edit-todo/:id").put((req, res, next) => {
  todoSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Todo updated successfully !");
      }
    }
  );
});

module.exports = router;
