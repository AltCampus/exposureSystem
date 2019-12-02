var express = require("express");
var router = express.Router();

const content = require("../controllers/content.controller.js");

// app.use("/content", contentRouter);

router.post("/new", content.create);

router.get("/", content.findAll);

//TODO
router.get("/:contentId", content.findOne);

router.put("/:contentId", content.update);

router.delete("/:contentId", content.delete);

module.exports = router;
