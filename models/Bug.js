const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  buggedCode: {
    type: String,
    required: true,
  },
});

const Bug = mongoose.model("Bug", bugSchema);

module.exports = Bug;
