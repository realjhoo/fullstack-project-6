// initialize the app
const express = require("express");
const path = require("path");
const app = express();
const { projects } = require("./data.json"); //an {object}

// set public directory to static -> css and js files
app.use("/static", express.static("public"));
// set views for pug files
app.set("views", path.join(__dirname, "views"));
// use pug
app.set("view engine", "pug");

// get all results to root
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/project", (req, res) => {
  res.render("project");
});

app.get("/about", (req, res) => {
  res.render("about");
});

console.log(projects[0].project_name);

// ==================================================
// app listens to port 3k. Shows time of last refresh
app.listen(3000, () => {
  let currentTime = getTime();
  console.log(currentTime + "Server running on localhost port 3000");
});

// ========================================================
function getTime() {
  const now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hour + ":" + minutes + ":" + seconds + " ~ ";

  return time;
}
