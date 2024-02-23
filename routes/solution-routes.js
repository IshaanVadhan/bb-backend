const express = require("express");
const { createSolution } = require("../controllers/solution-controller.js");

const router = express.Router();

router.post("/create", createSolution);

module.exports = router;
