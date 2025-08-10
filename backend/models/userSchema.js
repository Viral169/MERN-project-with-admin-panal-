const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchama = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Hash Password
userSchama.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
  } catch (error) {
    next(error);
  }
});

// Generate Jwt token
// ak vat yad rakhava jevi ke tu jwt sign ma je payload pass kare che ane tre jo ema new data add karvo hoy to add to thase but ene use krva mate new token banvo padse
userSchama.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        phone: this.phone,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET, 
      {expiresIn: "1d"}
    );
  } catch (e) {
    console.error("JWT signing failed:", e);
    return null;
  }
};

//Compare Password
userSchama.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (e) {
    console.log(e);
  }
};

module.exports = mongoose.model("User", userSchama);
