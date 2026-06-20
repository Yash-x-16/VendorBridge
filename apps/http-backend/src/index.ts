import express from "express" 
import authRoutes from "./Routes/authRoutes" 
import {connectDb} from "@repo/db/db"  
import dotenv from "dotenv" 
dotenv.config() 
const dbUrl = process.env.DB_URL as string
connectDb(dbUrl) ; 
const app = express() 

app.use(express.json())  
app.use("/app/auth",authRoutes) 

app.listen(3000,()=>{
    console.log("app is listening on port 3000") 
})