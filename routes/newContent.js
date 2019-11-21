module.exports = app => {
  const newContent = require("../controllers/newContent.controller.js");

  // Create new content
  app.post("/newContent", newContent.create);

  // Retrieve all content
  app.get("/newContent", newContent.findAll);

  // Retrieve single content with contentId
  app.get("/newContent/:contentId", newContent.findOne);

  // Update content with contentId
  app.put("/newContent/:contentId", newContent.update);

  // Delete content with contentId
  app.delete("/newContent/:contentId", newContent.delete);
};
