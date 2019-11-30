const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

// set root route
router.get("/", (req, res) => {
  res.render("index", {
    projects
  });
});

// set about route
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
