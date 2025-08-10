const express = require("express");
const admin = require("../../controllers/Admin/adminControler");
const userAuth = require("../../middleware/AuthUser");
const adminMiddlerware = require("../../middleware/adminMidleware");
const routers = express.Router();

routers.route("/users").get(userAuth, adminMiddlerware, admin.adminUserData);
routers
  .route("/contacts")
  .get(userAuth, adminMiddlerware, admin.adminContactData);
routers.route("/getuser/:id").get(userAuth, adminMiddlerware, admin.updateUser);
routers.route("/getuser/update/:id").patch(userAuth, adminMiddlerware, admin.updateUserbyId);
routers.route("/delete/:id").delete(userAuth, adminMiddlerware, admin.deleteUser);
routers
  .route("/contacts/:id")
  .delete(userAuth, adminMiddlerware, admin.deleteUserContact);
module.exports = routers;
