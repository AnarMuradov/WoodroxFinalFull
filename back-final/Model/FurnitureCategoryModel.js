import {mongoose ,Schema}  from "mongoose";

const furnitureCategorySchema = new Schema({
    category:String,
    date: {
      type: Date,
      default: Date.now,
    },
  });
  
 export const furnitureCategoryModel = mongoose.model("FurnitureCategory", furnitureCategorySchema);
 