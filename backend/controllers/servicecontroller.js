const Serviceschema = require("../models/serviceSchema");

const Service = async (req, res) => {
  try {
    const response = req.body;
    const serviceData = await Serviceschema.find(response);
    return res.json({serviceData});
  } catch (error) {
    return res.json({message: error });
  }
};

module.exports = Service;
