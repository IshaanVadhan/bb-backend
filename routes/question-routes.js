const express = require("express");
const {
  createQuestion,
  getQuestion,
} = require("../controllers/question-controller.js");

const router = express.Router();

router.post("/create", createQuestion);
router.get("/get", getQuestion);

module.exports = router;
