var express = require("express");
var router = express.Router();

const content = require("../controllers/contentController.js");

router.post("/new", content.newContent);

router.get("/list", content.findAllContent);

router.get("/:contentId", content.findOneContent);

router.put("/:contentId", content.updateContent);

router.delete("/:contentId", content.deleteContent);

module.exports = router;
