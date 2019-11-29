const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

router.get("/:id", (req, res) => {
  // *****************************
  // req.params.id returns undefined
  res.render("project", {
    project_name: projects[0].project_name,
    description: projects[0].description
    // technologies: projects[req.params.id].technologies,
    // live_link: projects[req.params.id].live_link,
    // github_links: projects[req.params.id].github_link
  });
});

module.exports = router;
