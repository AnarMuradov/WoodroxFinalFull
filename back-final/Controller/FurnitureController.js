import { furnitureModel } from "../Model/FurnitureModel.js";


export const getAllFurnitureData = async (req, res) => {
    try {
      const Furniture = await furnitureModel.find();
      res.status(200).json(Furniture); 
    } catch (error) {
      res.send(error.message);
    }
  } 
  export const FurnitureAllWithCategoryData = async (req, res) => {
    try {
      const Furniture = await furnitureModel.find().populate("categoryId");
      res.status(200).json(Furniture);
    } catch (error) {
      res.send(error.message);
    }
  };

  export const FurnitureByCategoryDataById = async (req, res) => {
    try {
      const { id } = req.params;
      const Furniture = await furnitureModel.find({categoryId:id});
      res.status(200).json(Furniture);
    } catch (error) {
      res.send(error.message);  
    }
  };
  
  export const getFurnitureDataById= async (req, res) => {
    try {
      const { id } = req.params;
    const Furniture = await furnitureModel.findById(id);
    Furniture.view = Furniture.view + 1;
    await Furniture.save();
      res.status(200).json(Furniture);
    } catch (error) {
      res.send(error.message);
    }
  }
  

  export const createFurnitureData = async (req, res) => {
    try {
      const { image, 
        title,
        price,
        brand,
        color,
        design,
        categoryId,view } = req.body;
      const newFurniture = new furnitureModel({
        image, 
        title,
        price,
        brand,
        color,
        design,
        categoryId,view
      });
      await newFurniture.save();
      res.status(200).json(newFurniture);
    } catch (error) {
      res.send(error.message);
    }
  }

 export const updateFurnitureDataById = async (req, res) => {
    try {
      const { id } = req.params;
      const { image, 
        title,
        price,
        brand,
        color,
        design,
        categoryId,view } = req.body;
      const Furniture = await furnitureModel.findByIdAndUpdate(id, {
        image, 
        title,
        price,
        brand,
        color,
        design,
        categoryId,view
      });
      res.status(200).json(Furniture);
    } catch (error) {
      res.send(error.message);
    }
  }

  export const deleteFurnitureDataById = async (req, res) => {
    try {
      const { id } = req.params;
      const Furniture = await furnitureModel.findByIdAndDelete(id);
      res.status(200).json("Data is deleted");
    } catch (error) {
      res.send(error.message);
    }
  }