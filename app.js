const express = require("express");
const routes = require("./routes/index");
const projectRoute = require("./routes/project");
const app = express();

app.set("view engine", "pug");
app.use("/static", express.static("public"));
app.use(routes);
app.use("/", projectRoute);

// ********** error handler **********
// set error
app.use((req, res, next) => {
  const err = new Error("We cannot find the requested url");
  err.status = 404;
  next(err);
});

// render error page
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
  console.log("Error: " + err.status + " " + err.message);
});

// set app's port to 3000
app.listen(3000, () => {
  // log out port and current time
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
