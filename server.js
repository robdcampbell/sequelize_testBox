import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import morgan from "morgan";
import sequelize from "./db/db.js";
import dotenv from "dotenv";
dotenv.config();
import UserRoutes from "./routes/authRoutes.js";

// Middleware.
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

//routes
app.use("/users", UserRoutes);

// test route
app.get("/", async (req, res) => {
  res.json({ msg: `App listenting on port: ${PORT}` });
});

// DB Connect, Server Start ////////////////////////

const start = async () => {
  try {
    app.listen(PORT, (req, res) => {
      //
      console.log(`App listenting on port: ${PORT}`);
      // once in place, use sequelize.authenticate()
      sequelize
        .sync()
        .then(() => {
          console.log("Connection has been established successfully.");
        })
        .catch((err) => {
          console.error("Unable to connect to the database:", err);
        });
    });
  } catch (error) {
    console.log(error);
  }
};

start();
