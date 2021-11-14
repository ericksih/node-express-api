import express from "express";
import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  editUser,
} from "../controllers/users.js";

const router = express.Router();

// get all users
router.get("/", getUsers);

// create
router.post("/", createUser);

// get user ID
router.get("/:id", getUser);

// delete by ID
router.delete("/:id", deleteUser);

// edited by ID
router.patch("/:id", editUser);

export default router;
