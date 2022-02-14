import { Router } from "express";
const router = Router();

import {
  createUser,
  getAllUsers,
  deleteUser,
  updateUsers,
} from "../controllers/userController.js";

router.route("/users").post(createUser).get(getAllUsers);
router.route("/users/:uuid").patch(updateUsers).delete(deleteUser);

export default router;
