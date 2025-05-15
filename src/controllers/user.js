import User from "../database/models/user.js";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import { hasPassword } from "../helpers/authHelper.js";
const {sign} = Jwt;

const createUser  = async (req,res) =>{
   try {
    let userData = req.body
    const userPassword = await hasPassword(userData.password);
    userData = {...userData,password:userPassword}
    console.log(userData)
    console.log(req.user.email);
    const user = await User.create(userData)
    return res.status(201).json({
        status:201,
        message:"user created successfull",
        data:user
    })
    
   } catch (error) {
    return res.status(500).json({
        status:500,
        message:"error occured",
        error
    })
   }
}

const getAllUsers = async (req,res)=>{
   try {
    const users = await User.find()
    return res.status(200).json({
        status:200,
        message:"users retrieved succesfully.",
        data:users
    })
   } catch (error) {
    return res.status(500).json({
        status:500,
        message:"error occured",
        error
    })
   
   } 
}
const getUserDetails = async (req,res)=>{
    try {
     const users = await User.findById(req.params.id)
     return res.status(200).json({
         status:200,
         message:"user details retrieved succesfully.",
         data:users
     })
    } catch (error) {
     return res.status(500).json({
         status:500,
         message:"error occured",
         error
     })
    
    } 
 }

 const userLogin = async (req,res)=>{
    try {
        const {email,password} = req.body
        const userByEmail = await User.findOne({email})
        if(!userByEmail){
            return res.status(404).json({
                status:404,
                message:"User email not found!",
            }) 
        }
        const userByPassword = userByEmail.password;

        if(!await bcrypt.compare(password,userByPassword)){
            return res.status(404).json({
                status:404,
                message:"User Password not correct!",
            }) 
        }
        
        const token = sign({id:userByEmail._id},process.env.JWT_SECRET)
        console.log("token",token);
        return res.status(200).json({
            status:200,
            message:"Logged successfull!",
            data:token
        }) 

    } catch (error) {
     return res.status(500).json({
         status:500,
         message:"error occured",
         error
     })
    
    } 
 }



export default {createUser, getAllUsers,getUserDetails,userLogin};