const userschama = require("../models/userSchema");

const signup = async (req, res, next) => {
  try {
    const {username, phone, email, password, isAdmin} = req.body;
    const userExists = await userschama.findOne({email});
    if (userExists) {
      return res.status(400).json({message: "User Already Exists"});
    }
    const user = await userschama.create({
      username,
      phone,
      email,
      password,
      isAdmin,
    });
    return res.status(201).json({
      message: "User Register Successfully",
      token: await user.generateToken(),
      userId: user._id,
      user,
    });
  } catch (e) {
    next(e);
    // return res.status(500).json(`signup error is ${e}`);
  }
};

const login = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const userlogin = await userschama.findOne({email});
    if (!userlogin) {
      return res.status(500).json({message: "Invalid Eamil"});
    }
    const comparepassword = await userlogin.comparePassword(password);
    if (comparepassword) {
      return res.status(200).json({
        message: "User Login Successfully",
        token: await userlogin.generateToken(),
        userId: userlogin._id,
        login: userlogin,
      });
    } else {
      return res.status(401).json({message: "Invalid Password"});
    }
  } catch (e) {
    next(e);
  }
};

const AuthUser = (req, res) => {
  try {
    const validUser = req.user;
    return res.json({validUser});
  } catch (error) {
    console.log("User Auth error is ", error);
  }
};

module.exports = {
  Home,
  signup,
  login,
  AuthUser,
};
