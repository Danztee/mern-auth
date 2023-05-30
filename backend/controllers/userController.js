import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

/**
 * @description get user profile
 * @route POST /api/users
 * @access private
 */
const getProfile = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

/**
 * @description update user profile
 * @route PUT api/users
 * @access private
 */
const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      User.password = req.body.password;
    }
    const updated_user = await user.save();
    res.status(200).json({
      id: updated_user._id,
      name: updated_user.name,
      email: updated_user.email,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

export { getProfile, updateProfile };
