import express, { Router } from "express"; 
import { signin, signup } from "../Controllers/authController";

const authRoutes:Router = express.Router() ; 

try {
    authRoutes.post("/signup",signup) ; 
    authRoutes.post("/signin",signin) ; 
} catch (error) {
    console.log("error in authRoutes") ; 
}

export  default authRoutes