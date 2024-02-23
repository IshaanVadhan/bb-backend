const Question = require("../models/Question.js");

const createQuestion = async (req, res) => {
  try {
    const que = await Question.create(req.body);
    console.log(que);
    if (!que) {
      res.status(400).json({ error: "Could not add Question" });
    }
    res.status(200).json(que);
  } catch (error) {
    res.status(500).json({ error: error.message || "An error occurred" });
  }
};

const getQuestion = async (req, res) => {
  try {
    const { questionId } = req.query;

    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    return res.status(200).json(question);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "An error occurred" });
  }
};

module.exports = { createQuestion, getQuestion };
