const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    provider: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {timestamps: true}
);

const Service = mongoose.model("service", serviceSchema);

module.exports = Service;
