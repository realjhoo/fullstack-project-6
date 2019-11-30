const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

// set project route and pass id parameter
router.get("/project/:id", (req, res) => {
  let id = projects[req.params.id].id;
  res.render("project", {
    project_name: projects[id].project_name,
    description: projects[id].description,
    technologies: projects[id].technologies,
    live_link: projects[id].live_link,
    github_link: projects[id].github_link,
    image_urls: projects[id].image_urls
  });
});

module.exports = router;
