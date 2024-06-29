import express from "express";
import { createFurnitureData, FurnitureAllWithCategoryData, FurnitureByCategoryDataById, deleteFurnitureDataById, getAllFurnitureData, getFurnitureDataById, updateFurnitureDataById } from "../Controller/FurnitureController.js";
export const furnitureRouter = express.Router();

furnitureRouter.get("/furniture", getAllFurnitureData);
  
furnitureRouter.get("/furniturewithcategory",FurnitureAllWithCategoryData);

furnitureRouter.get("/furniture/:id",getFurnitureDataById);
 
furnitureRouter.get("/furniturebycategory/:id", FurnitureByCategoryDataById);

furnitureRouter.post("/furniture", createFurnitureData);  
  

furnitureRouter.put("/furniture/:id",updateFurnitureDataById);
  

furnitureRouter.delete("/furniture/:id", deleteFurnitureDataById);
   