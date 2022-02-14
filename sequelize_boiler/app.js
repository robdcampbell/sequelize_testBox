import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import morgan from "morgan";

// Middleware.
if (process.env.NODE_ENV !== "prodcution") {
  app.use(morgan("dev"));
}
app.use(express.json());

//routes
// app.use("/api/user", UserRoutes);

// test route
app.get("/", async (req, res) => {
  res.json({ msg: `App listenting on port: ${PORT}` });
});

// DB Connect, Server Start ////////////////////////

const start = async () => {
  try {
    app.listen(PORT, (req, res) => {
      //
      await;
      console.log(`App listenting on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
