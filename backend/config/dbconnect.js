const mongoose = require("mongoose");

const dbconfig = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL); 
    console.log("Database Connection Successfull")
  } catch (e) {
    console.log("Database Connection Faild")
    process.exit(0)
  }
};

module.exports = dbconfig;
