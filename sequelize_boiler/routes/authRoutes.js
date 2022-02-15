import { Router } from "express";
const router = Router();

import {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

router.route("/").post(createUser).get(getAllUsers);
router.route("/:uuid").patch(updateUser).delete(deleteUser);

export default router;
