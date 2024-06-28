import { populate } from "dotenv";
import { userModel } from "../Model/userModel.js";

export const getAllUserData = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.send(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const decoded = req.decoded;
    const users = await userModel.findById(id);
    if (decoded.email !== users.email && decoded.role === "User") {
      return res.send("U don't have access");
    }
    res.status(200).json(users);
  } catch (error) {
    res.send(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const newUser = new userModel({
      username,
      email,
      password,
      role, 
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.send(error.message);
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password, role } = req.body;
    const users = await userModel.findByIdAndUpdate(id, {
      username,
      email,
      password,
      role,
    });
    res.status(200).json(users);
  } catch (error) {
    res.send(error.message);
  }
}; 

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await userModel.findByIdAndDelete(id);
    res.status(200).json("Data is deleted");
  } catch (error) {
    res.send(error.message);
  }
};
