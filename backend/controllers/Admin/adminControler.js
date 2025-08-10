const userSchema = require("../../models/userSchema");
const contactSchema = require("../../models/contactSchema");

const adminUserData = async (req, res) => {
  try {
    const userdata = await userSchema.find({}, {password: 0});

    if (!userdata || userdata.length === 0) {
      return res.status(404).json({message: "No User Found"});
    }

    return res.status(200).json({userData: userdata});
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({message: "Internal Server Error"});
  }
};

const adminContactData = async (req, res) => {
  try {
    const contact = await contactSchema.find();
    return res.json({contact});
  } catch (error) {
    return res.json({message: error});
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const getSigleuser = await userSchema.findOne({_id: id}, {password: 0});
    if (!getSigleuser) {
      return res.status(404).json({message: "User not found"});
    }
    return res
      .status(200)
      .json({message: "User Update successfully", getSigleuser});
  } catch (error) {
    return res
      .status(500)
      .json({message: "Server error", error: error.message});
  }
};

const updateUserbyId = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body; // contains fields to update

  try {
    const updatedUser = await userSchema.findByIdAndUpdate(
      id,
      updateData,
      {new: true, runValidators: true} // returns updated document
    );

    if (!updatedUser) {
      return res.status(404).json({message: "User not found"});
    }

    return res.status(200).json({
      message: "User Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({message: "Update failed", error: error.message});
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await userSchema.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({message: "User not found"});
    }
    res.status(200).json({message: "User Delete successfully", deletedUser});
  } catch (error) {
    return res
      .status(500)
      .json({message: "Server error", error: error.message});
  }
};
const deleteUserContact = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedContact = await contactSchema.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({message: "Contact not found"});
    }
    return res
      .status(200)
      .json({message: "Contact Delete successfully", deletedContact});
  } catch (error) {
    return res
      .status(500)
      .json({message: "Server error", error: error.message});
  }
};

module.exports = {
  adminUserData,
  adminContactData,
  updateUser,
  updateUserbyId,
  deleteUser,
  deleteUserContact,
};
