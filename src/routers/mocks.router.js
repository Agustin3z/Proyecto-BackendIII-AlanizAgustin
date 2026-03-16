import { Router } from "express"

import { generateMockUsers } from "../mocks/user.mock.js"
import { generateMockPets } from "../mocks/pet.mock.js"

import { userModel } from "../models/user.model.js"
import { petModel } from "../models/pet.model.js"

const router = Router()

// mocking pets
router.get("/mockingpets", (req, res) => {

 const pets = generateMockPets(20)

 res.send({
  status: "success",
  payload: pets
 })

})

// mocking users
router.get("/mockingusers", (req, res) => {

 const users = generateMockUsers(50)

 res.send({
  status: "success",
  payload: users
 })

})

// generate data
router.post("/generateData", async (req, res) => {

 const { users = 0, pets = 0 } = req.body

 const mockUsers = generateMockUsers(users)
 const mockPets = generateMockPets(pets)

 await userModel.insertMany(mockUsers)
 await petModel.insertMany(mockPets)

 res.send({

  status: "success",
  message: "Data generated successfully"

 })

})

export default router