import mongoose, { model, Schema } from "mongoose";

const Role = ["Vendor" , "PO" , "Manager" , "Admin"] 

const userSchema = new Schema({
    Name :{
        type : String , 
        required:true , 
        min : 6 , 
        max :30 , 
    } , 
    Role :{
        type: String ,   
        enum : Role , 
        required:true 
    }, 
    email :{
        type :String , 
        required : true , 
    } , 
    password :{
        type: String , 
        required: true , 
        min :6
    } , 
    isverified:{
        type:Boolean , 
    },
    verificationCode :{
        type:Number , 
        min:6 ,
        max : 8 
    } ,
    profile:[{
        type:mongoose.Schema.ObjectId 
    }]
}) 

export const User = model("User" , userSchema) ; 