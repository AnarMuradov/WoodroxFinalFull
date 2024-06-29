import { furnitureCategoryModel } from "../Model/FurnitureCategoryModel.js";

export const furnitureCategoryAllData = async (req, res) => {
  try {
    const furnitureCategories = await furnitureCategoryModel.find();
    res.status(200).json(furnitureCategories);
  } catch (error) {
    res.send(error.message);
  }
};

export const furnitureCategoryDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const furnitureCategories = await furnitureCategoryModel.findById(id);
    res.status(200).json(furnitureCategories);
  } catch (error) {
    res.send(error.message);
  }
};

export const createfurnitureCategoryData = async (req, res) => {
  try {
    const {
      category
    } = req.body;
    const newFurnitureCategory = new furnitureCategoryModel({
      category,
    });
    await newFurnitureCategory.save();
    res.status(200).json(newFurnitureCategory);
  } catch (error) {
    res.send(error.message);
  }
};

export const updatefurnitureCategoryDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      category
    } = req.body;
    const furnitureCategories = await furnitureCategoryModel.findByIdAndUpdate(id, {
      category
    });
    res.status(200).json(furnitureCategories);
  } catch (error) {
    res.send(error.message);
  }
};

export const deletefurnitureCategoryDataById = async (req, res) => {
  try {
    const { id } = req.params;
    const furnitureCategories = await furnitureCategoryModel.findByIdAndDelete(id);
    res.status(200).json("Data is deleted");
  } catch (error) {
    res.send(error.message);
  }
};
