const Solution = require("../models/Solution");

const createSolution = async (req, res) => {
  const { submittedBy, questionId, bugId, solutionCode } = req.body;
  try {
    const solution = await Solution.create({
      submittedBy,
      questionId,
      bugId,
      solutionCode,
    });
    if (!solution) {
      return res.status(400).json({ error: "Could not create solution" });
    }
    return res.status(200).json(solution);
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "An error occurred" });
  }
};

module.exports = {
  createSolution,
};
