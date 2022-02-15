import { Router } from "express";
const router = Router();

import {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
  getUser,
} from "../controllers/authController.js";

router.route("/").post(createUser).get(getAllUsers);
router.route("/:uuid").get(getUser).patch(updateUser).delete(deleteUser);

export default router;
