const mongoose = require("mongoose");
const nanoid = require("nanoid");

const questionSchema = new mongoose.Schema({
  language: String,
  code: String,
  exampleInput: String,
  exampleOutput: String,
  roomId: {
    type: String,
    default: () => nanoid.nanoid(6),
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
