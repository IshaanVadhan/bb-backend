const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const compiler = require("compilex");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user-routes.js");
const questionRoutes = require("./routes/question-routes.js");
const bugRoutes = require("./routes/bug-routes.js");
const solutionRoutes = require("./routes/solution-routes.js");
//initialize app
const app = express();

//use middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser());

//routes
app.use("/users", userRoutes);
app.use("/questions", questionRoutes);
app.use("/bugs", bugRoutes);
app.use("/solutions", solutionRoutes);

const option = { stats: true };
compiler.init(option);

app.get("/compiler", function (req, res) {
  res.sendFile(__dirname + "/compiler.html");
});

app.post("/compile", function (req, res) {
  const { code, lang } = req.body;
  console.log(req.body);
  if (lang === "C++" || lang === "c++" || lang === "cpp" || lang === "Cpp") {
    const envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
    compiler.compileCPP(envData, code, function (data) {
      console.log(data);
      res.send(data);
    });
  }
  if (lang === "Python" || lang === "python") {
    const envData = { OS: "windows", options: { timeout: 10000 } };
    compiler.compilePython(envData, code, function (data) {
      res.send(data);
    });
  }
  if (lang === "C") {
    const envData = { OS: "windows", cmd: "g++", options: { timeout: 10000 } };
    compiler.compileCPP(envData, code, function (data) {
      res.send(data);
    });
  }
  if (lang === "Java" || lang === "java") {
    const envData = { OS: "windows", options: { timeout: 10000 } };
    compiler.compileJava(envData, code, function (data) {
      res.send(data);
    });
  }
});

mongoose
  .connect(
    "mongodb+srv://ishaanvadhan:ishaanvadhan@bug-battle.mxpu26f.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log(`Server Started at Port 4000 🚀🚀`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
module.exports = app;

compiler.flush(function () {
  console.log("All temporary files flushed!");
});
