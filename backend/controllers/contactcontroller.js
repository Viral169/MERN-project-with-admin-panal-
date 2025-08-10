const contactschema = require("../models/contactSchema");

const contactForm = async (req, res, next) => {
  try {
    const respons = req.body;
    const contacts = await contactschema.create(respons);
    return res.json({
      message: "Your Details Submited Succesfully",
      contact: contacts,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = contactForm;
