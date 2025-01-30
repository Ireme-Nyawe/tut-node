import User from "../database/models/user.js";

const createUser  = async (req,res) =>{
   try {
    const userdata = req.body
    const user = await User.create(userdata)
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
export default {createUser, getAllUsers,getUserDetails};