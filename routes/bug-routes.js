const express = require("express");
const {
  createBug,
  getBugsByQuestionAndTeam,
} = require("../controllers/bug-controller.js");

const router = express.Router();

router.post("/create", createBug);
router.get("/get", getBugsByQuestionAndTeam);

module.exports = router;
