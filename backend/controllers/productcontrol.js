const {isStrongPassword} = require("validator");
const productSchema = require("../models/productSchema");

const product = async (req, res) => {
  const {name, description, price, rating, img, category, stock, numofreviews} =
    req.body;
  try {
    const createProduct = await productSchema.create({
      name,
      description,
      price,
      rating,
      img,
      category,
      stock,
      numofreviews,
    });
    res.status(201).json({
      success: true,
      message: "Product Created Successfully",
      createProduct,
    });
  } catch (e) {
    if (e.code === 11000) {
      res.send("Product Error", 400);
    }
  }
};

const getproduct = async (req, res) => {
  try {
    const getprodcts = await productSchema.find();
    res.status(201).json({
      success: true,
      message: "Prodcut get succesfully",
      getprodcts,
    });
  } catch (e) {
    if (e.code === 11000) {
      res.send("product error", 400);
    }
  }
};

const updataProduct = async (req, res) => {
  const update = await productSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true, runValidators: true}
  );
  res.json({
    success: true,
    message: "Update prodcut successfully",
    update,
  });
};
module.exports = {
  product,
  getproduct,
  updataProduct
};
