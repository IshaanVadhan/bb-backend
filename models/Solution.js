const mongoose = require("mongoose");

const solutionSchema = new mongoose.Schema({
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
  bugId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bug",
    required: true,
  },
  solutionCode: {
    type: String,
    required: true,
  },
});

const Solution = mongoose.model("Solution", solutionSchema);

module.exports = Solution;
