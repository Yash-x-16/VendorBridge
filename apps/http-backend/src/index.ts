import express from "express" 
import authRoutes from "./Routes/authRoutes"
const app = express() 

app.use(express.json())  
app.use("/app/auth",authRoutes) 

app.listen(3000,()=>{
    console.log("app is listening on port 3000") 
})