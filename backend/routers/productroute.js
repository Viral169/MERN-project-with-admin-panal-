const express = require("express");
const productrout = express.Router();
const {
  product,
  getproduct,
  updataProduct,
} = require("../controllers/productcontrol");
// const {userAuth} = require("../middleware/auth");

productrout.post("/creatproduct", product);
productrout.post("/getproduct", getproduct);
productrout.put("/updateproduct/:id", updataProduct);

module.exports = productrout;
