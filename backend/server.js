require("dotenv").config();
const express = require("express");
const userroute = require("./routers/userroute");
const app = express();
const dbconnection = require("./config/dbconnect");
const errormiddleware = require("./middleware/errorMiddleware");
const contactrouter = require("./routers/contactrouter");
const servicerouter = require("./routers/servicerouter");
const adminRouter = require("./routers/Admin/adminrouter");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/v1", userroute);
app.use("/api/form", contactrouter);
app.use("/api/services", servicerouter);
app.use("/api/admin", adminRouter);
app.use(errormiddleware);

const host = "127.0.0.1";
const port = 3000;
dbconnection().then(() => {
  app.listen(port, host, () => {
    console.log(`Server is running on port http://${host}:${port}/api`);
  });
});
