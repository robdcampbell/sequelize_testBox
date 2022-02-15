import User from "../models/User.js";

// Create User
const createUser = async (req, res) => {
  const { name, email, role, password } = req.body;

  console.log(name, email, role);

  // find one to validate unique email address

  try {
    const newUser = await User.create({ name, email, role });
    res.json({ newUser });
  } catch (error) {
    console.log(error);
  }
};

// Read all Users
const getAllUsers = async (req, res) => {
  console.log("get all users");
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

// Read specific User

// Update specific User
const updateUser = async (req, res) => {
  console.log("update user");
};

// Delete a User
const deleteUser = async (req, res) => {
  console.log("delete user");
};

export { createUser, getAllUsers, deleteUser, updateUser };
