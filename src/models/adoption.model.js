import mongoose from "mongoose"

const adoptionSchema = new mongoose.Schema({

 owner:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 pet:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Pet"
 }

})

export const adoptionModel = mongoose.model("Adoption", adoptionSchema)