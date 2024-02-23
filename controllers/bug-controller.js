const Bug = require("../models/Bug");


const createBug = async (req, res) => {
  const { submittedBy, questionId, buggedCode } = req.body;
  try {
    const bug = await Bug.create({ submittedBy, questionId, buggedCode });
    if (!bug) {
      return res.status(400).json({ error: "Could not create bug" });
    }
    return res.status(200).json(bug);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "An error occurred" });
  }
};

const getBugsByQuestionAndTeam = async (req, res) => {
  try {
    const questionId = req.query.questionId;
    const userId = req.query.submittedBy;
    //console.log(questionId+" "+userId)
    const bugs = await Bug.findOne({
      questionId,
      submittedBy: { $ne: userId },
    });

    if (!bugs || bugs.length === 0) {
      return res
        .status(404)
        .json({ message: "No bugs found for the specified question" });
    }

    return res.status(200).json(bugs);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "An error occurred" });
  }
};

module.exports = {
  createBug,
  getBugsByQuestionAndTeam,
};
