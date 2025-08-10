const errormiddleware = (error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Backend Error";
  // const extraDetails = error.extraDetails;

  return res.status(status).json({
    message: message,
    // message: extraDetails
  });
};
module.exports = errormiddleware;
