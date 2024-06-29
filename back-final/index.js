import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter } from "./Router/userRouter.js";
import { authRouter } from "./Router/AuthRoute.js";
import 'dotenv/config'
import { furnitureRouter } from "./Router/FurnitureRouter.js";
import { furnitureCategoryRouter } from "./Router/FurnitureCategoryRouter.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors()); 



app.use("/",furnitureRouter)
app.use("/users",userRouter)
app.use("/",authRouter)
app.use("/furniturecategories",furnitureCategoryRouter)


 
mongoose
  .connect(process.env.SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch(()=>console.log("Not Connected"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
