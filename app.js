const express = require("express");
const app = express();
const PORT = 5000;
//importing sequelize models
const { sequelize, User } = require("./models");

app.use(express.json());

// user auth routes here

// Test post route - Create a user
app.post("/users", async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const user = await User.create({ name, email, role });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// Test get route - Get all Users
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// Test get route - Get specific user
app.get("/users/:id", async (req, res) => {
  const uuid = req.params.id;
  try {
    const user = await User.findOne({ where: { uuid } });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// Test update *name* route - Get specific user
app.patch("/users/:id", async (req, res) => {
  const uuid = req.params.id;
  const newName = req.body.name;

  try {
    const user = await User.update({ name: newName }, { where: { uuid } });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// Test delete route - delete specific user
app.delete("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.destroy({ where: { uuid } });
    return res.json({ msg: `User Deleted!` });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    msg: `App running on port: ${PORT}`,
  });
});

app.listen(PORT, async (req, res) => {
  console.log(`App running on: http://localhost:${PORT}`);
  // await sequelize.sync();
  await sequelize.authenticate();
  console.log("Database Connected!");
});
