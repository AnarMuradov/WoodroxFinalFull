import { mongoose, Schema } from "mongoose";

const furnitureSchema = new Schema({
  image: String, 
  title:String,
  price: Number,
  brand:String,
  color:String,
  design:String,
  categoryId: { type: Schema.Types.ObjectId, ref: "FurnitureCategory" },
  date: {
    type: Date,
    default: Date.now,
  },
  view: {
    type: Number,
    default: 0,
  },
});

export const furnitureModel = mongoose.model("Furniture", furnitureSchema);
