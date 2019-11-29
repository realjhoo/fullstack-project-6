const express = require("express");
const router = express.Router();
const { projects } = require("../data.json"); // an {object}
// const project = require("../routes/project");

// set root to index.pug
router.get("/", (req, res) => {
  res.render("index", {
    projects
  });
});

// set /about page tp about.pug
router.get("/about", (req, res) => {
  res.render("about");
});

console.log("index.js: " + projects[0].project_name);

module.exports = router;
