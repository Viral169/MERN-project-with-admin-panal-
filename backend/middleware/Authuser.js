// a middleware user and admin ni pase token che ke nai te chek krava mate

const jwt = require("jsonwebtoken");
// const userAuth = async (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({message: "Unauthorized: No token provided"});
//     }

//     const token = authHeader.replace("Bearer ", "").trim();

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // You can attach user info to request
//     next();
//   } catch (error) {
//     return res.status(401).json({message: "Unauthorized: Invalid token"});
//   }
// };

// module.exports = userAuth;

// this is thappa technical code but is raise a replace error

const userAuth = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.json({
      message: "Unauthorized HTTP token not provided",
    });
  }
  const jwtToken = token.replace("Bearer", "").trim();
  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);
    req.user = isVerified;
    next();
  } catch (error) {
    return res.json({message: error || "Unauthorized. Invalid token,"});
  }
};
module.exports = userAuth;
