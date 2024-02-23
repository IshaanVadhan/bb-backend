const User = require("../models/User.js");

const register = async (req, res) => {
  const {
    leaderName,
    leaderEmail,
    leaderContact,
    member1Name,
    member2Name,
    member3Name,
    password,
    roomId,
  } = req.body;
  try {
    const question = await Question.findOne({ roomId: roomId });

    if (!question) {
      return res.status(400).json({ error: "Question not found" });
    }

    // Increment the count
    question.count += 1;
    await question.save();

    const user = await User.create({
      leaderName,
      leaderEmail,
      leaderContact,
      member1Name,
      member2Name,
      member3Name,
      password,
      roomId,
    });

    if (!user) {
      return res.status(400).json({ error: "Could not create user" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "An error occurred" });
  }
};

const login = async (req, res) => {
  const { leaderEmail, password } = req.body;
  try {
    const user = await User.findOne({ leaderEmail: leaderEmail });
    console.log(user);
    if (!user) {
      res.status(400).json({ error: "Could Not Find User" });
    }
    const match = password === user.password;
    if (!match) {
      return res.status(400).json({ error: "Wrong Password" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message || "An error occurred" });
  }
};

module.exports = { register, login };
