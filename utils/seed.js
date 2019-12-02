const Admin = require("../models/adminSchema");

Admin.find({ isAdmin: true }, (err, adminUser) => {
  if (adminUser.length === 0) {
    const NewAdmin = new Admin({
      username: "admin",
      email: "admin@altcampus.io",
      password: "drybar",
      isAdmin: true
    });
    NewAdmin.save();
    console.log(NewAdmin, "admin created");
  }
});
