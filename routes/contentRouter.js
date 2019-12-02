var express = require("express");
var router = express.Router();

const content = require("../controllers/contentController.js");

// app.use("/content", contentRouter);

router.post("/new", content.create);

router.get("/", content.findAll);

//TODO
router.get("/:contentId", content.findOne); //adddress should be /content/:contentid

router.put("/:contentId", content.update); //adddress should be /content/:contentid

router.delete("/:contentId", content.delete); //adddress should be /content/:contentid

module.exports = router;
