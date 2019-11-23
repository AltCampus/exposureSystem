var express = require("express");
var router = express.Router();

const newContent = require("../controllers/content.controller.js");

// Create new content
router.post("/", newContent.create);

// Retrieve all content
router.get("/", newContent.findAll);

// Retrieve single content with contentId
router.get("/:contentId", newContent.findOne);

// Update content with contentId
router.put("/:contentId", newContent.update);

// Delete content with contentId
router.delete("/:contentId", newContent.delete);

module.exports = router;
