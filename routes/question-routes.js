const express = require("express");
const {
  createQuestion,
  getQuestion,
  getAllQuestions,
  getLimitedQuestions,
} = require("../controllers/question-controller.js");

const router = express.Router();

router.post("/create", createQuestion);
router.get("/get", getQuestion);
router.get("/getall", getAllQuestions);
router.get("/getnew", getLimitedQuestions);

module.exports = router;
