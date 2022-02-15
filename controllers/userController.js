import User from "../models/User.js";
// Create User
const createUser = async (req, res) => {
  const { name, email, role, password } = req.body;
  try {
    // find one to validate unique email address
    const currUser = await User.findOne({
      where: {
        email,
      },
    });
    if (currUser) {
      res.status(202).json({ msg: "User Already Exists!" });
    } else {
      const newUser = await User.create({ name, email, role });
      res.status(200).json({ newUser });
    }
  } catch (err) {
    console.log(err);
  }
};

// GET ALL USERS
const getAllUsers = async (req, res) => {
  console.log("get all users");
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

// GET SPECIFIC USER
const getUser = async (req, res) => {
  console.log("get specific user");
  const uuid = req.params.uuid;

  try {
    const user = await User.findOne({
      where: {
        uuid,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong." });
  }
};

// UPDATE SPECIFIC USER
const updateUser = async (req, res) => {
  console.log("update user");
};

// DELETE A USER
const deleteUser = async (req, res) => {
  console.log("delete user");

  const uuid = req.params.uuid;
  try {
    let deletedata = await User.destroy({
      where: {
        uuid,
      },
    });
    if (deletedata) {
      res.status(200).json({
        success: true,
        msg: "User Deleted Successfully",
        data: deletedata,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

export { createUser, getUser, getAllUsers, deleteUser, updateUser };
