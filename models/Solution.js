const mongoose = require("mongoose");

const solutionSchema = new mongoose.Schema({
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  roomId: {
    type: String, // Assuming roomId is a String
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
