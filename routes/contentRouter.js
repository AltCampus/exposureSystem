var express = require("express");
var router = express.Router();

const content = require("../controllers/content.controller.js");

// Create new content
router.post("/new", content.create);

// Retrieve all content
router.get("/", content.findAll);

// Retrieve single content with contentId
router.get("/:contentId", content.findOne);

// Update content with contentId
router.put("/:contentId", content.update);

// Delete content with contentId
router.delete("/:contentId", content.delete);

module.exports = router;
