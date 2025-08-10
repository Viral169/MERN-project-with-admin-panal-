const validate = (Schema) => async (req, res, next) => {
  try {
    const parseBody = await Schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (e) {
    const status = e.status;
    const message = e.issues.map((issue) => {
      return issue.message;
    });
    const extraDetails = "All Fields Are Required";
    const error = {
      status,
      message,
      extraDetails,
    };
    next(error);
  }
};
module.exports = validate;
