import mongoose from "mongoose" 


export const connectDb = async(dbUrl:string)=>{
    try {
        const connection = await mongoose.connect(dbUrl) 
        return connection.connection.host 
    } catch (error) {
        console.log("error in connecting to db",error)
    }
}