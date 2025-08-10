const express=require("express")
const Service = require("../controllers/servicecontroller")
const routers=express.Router()

routers.route("/service").get(Service)
module.exports=routers