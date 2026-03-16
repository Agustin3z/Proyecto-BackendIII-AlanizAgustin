import express from "express"
import dotenv from "dotenv"

import {connectDB} from "./config/database.js"

import usersRouter from "./routers/users.router.js"
import petsRouter from "./routers/pets.router.js"
import mocksRouter from "./routers/mocks.router.js"

dotenv.config()

const app = express()

app.use(express.json())

connectDB()

app.use("/api/users",usersRouter)
app.use("/api/pets",petsRouter)
app.use("/api/mocks",mocksRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{

 console.log("Server running on port "+PORT)

})