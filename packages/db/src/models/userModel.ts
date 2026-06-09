import mongoose, { Schema } from "mongoose";

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
    profile:[{
        type:mongoose.Schema.ObjectId 
    }]
})