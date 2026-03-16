import mongoose from "mongoose"

const petSchema = new mongoose.Schema({

 name:String,
 specie:String,
 birthDate:Date,
 adopted:{
  type:Boolean,
  default:false
 }

})

export const petModel = mongoose.model("Pet", petSchema)