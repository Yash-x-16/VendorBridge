import mongoose from "mongoose" 

export const connectDb = async()=>{
    try {
        const connection = await mongoose.connect("") 
        return connection.connection.host 
    } catch (error) {
        console.log("error in connecting to db",error)
    }
}