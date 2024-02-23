const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  leaderName: {
    type: String,
    required: true,
  },
  leaderEmail: {
    type: String,
    required: true,
  },
  leaderContact: {
    type: Number,
    required: true,
  },
  member1Name: String,
  member2Name: String,
  member3Name: String,
  password: {
    type: String,
    required: true,
  },
  roomId: {
    type: String, // Assuming roomId is a String
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
