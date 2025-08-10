const express = require("express");
const contactForm = require("../controllers/contactcontroller");
const contactrouter = express.Router();
const validate = require("../middleware/validator_middlerware");
const { contactSchema } = require("../validators/auth-validator");

contactrouter.route("/contactform").post(validate(contactSchema),contactForm);

module.exports = contactrouter;
