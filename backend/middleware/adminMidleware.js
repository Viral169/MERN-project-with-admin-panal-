const adminMiddlerware = async (req, res, next) => {
  try {
    const admin = req.user.isAdmin;
    if (!admin) {
      return res.json({message: "Access Denied, You are not an admin"});
    }
    // res.json({admin});
    next();
  } catch (error) {
    return res.json({message: error});
  }
};

module.exports = adminMiddlerware;
