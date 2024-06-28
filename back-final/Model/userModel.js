import {mongoose ,Schema}  from "mongoose";


const userSchema = new Schema({
username:String,
email:{type:String,unique:true},
password:{type:String,unique:true},
role:{
    type:String,
    default:"User"
}
},{timestamps:true})

export const userModel = mongoose.model("User", userSchema);

