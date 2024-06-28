import express from "express";
import {
  createUser,
  deleteUserById,
  getAllUserData,
  getUserById,
  updateUserById,
} from "../Controller/userController.js";
import { authMiddleware } from "../Middleware/AuthMiddleware.js";
export const userRouter = express.Router();

userRouter.get("/", authMiddleware(["Admin"]), getAllUserData);

userRouter.get("/:id", authMiddleware(["User", "Admin"]), getUserById);

userRouter.post("/", authMiddleware(["Admin"]), createUser);

userRouter.put("/adminupdate/:id", authMiddleware(["Admin"]), updateUserById);

userRouter.delete("/:id", authMiddleware(["Admin"]), deleteUserById);
