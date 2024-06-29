import express from "express";
import { createfurnitureCategoryData, furnitureCategoryAllData, furnitureCategoryDataById, deletefurnitureCategoryDataById, updatefurnitureCategoryDataById } from "../Controller/FurnitureCategoryController.js";
export const furnitureCategoryRouter = express.Router();


furnitureCategoryRouter.get("/",furnitureCategoryAllData);
  

furnitureCategoryRouter.get("/:id", furnitureCategoryDataById);
  

furnitureCategoryRouter.post("/", createfurnitureCategoryData);
  

furnitureCategoryRouter.put("/:id", updatefurnitureCategoryDataById);
  

furnitureCategoryRouter.delete("/:id", deletefurnitureCategoryDataById);
     