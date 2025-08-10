const mongo = require("mongoose");

const product = new mongo.Schema({
  name: {type: String, require: true, trim: true},
  description: {type: String, require: true},
  price: {type: Number, require: true},
  rating: {type: Number},
  img: {type: String, default: "Not Found"},
  category: {
    type: String,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  numofreviews: [
    {
      user: {
        type: mongo.Schema.ObjectId,
        ref: "user",
      },
      name: {type: String},
      rating: {type: Number},
      comment: {type: String},
    },
  ],
  user: {
    type: mongo.Schema.ObjectId,
    ref: "user",
  },
});

module.exports = mongo.model("product", product);
