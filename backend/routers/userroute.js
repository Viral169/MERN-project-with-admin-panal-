const express = require("express");
const control = require("../controllers/usercontrol");
const router = express.Router();
const validator = require("../middleware/validator_middlerware");
const validate = require("../validators/auth-validator");
const userAuth = require("../middleware/AuthUser");

router.route("/").get(userAuth, control.Home);
router.route("/signup").post(validator(validate.signupSchema), control.signup);
router.route("/login").post(validator(validate.loginSchema), control.login);
router.route("/user").get(userAuth, control.AuthUser);


module.exports = router;
