const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  language: String,
  code: String,
  exampleInput: String,
  exampleOutput: String,
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
