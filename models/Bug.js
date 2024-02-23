const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  roomId: {
    type: String, // Assuming roomId is a String
    required: true,
  },
  buggedCode: {
    type: String,
    required: true,
  },
});

const Bug = mongoose.model("Bug", bugSchema);

module.exports = Bug;
