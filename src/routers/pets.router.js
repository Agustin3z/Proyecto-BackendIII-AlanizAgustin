import {Router} from "express"
import {petModel} from "../models/pet.model.js"

const router = Router()

router.get("/", async (req,res)=>{

 const pets = await petModel.find()

 res.send({
  status:"success",
  payload:pets
 })

})

export default router