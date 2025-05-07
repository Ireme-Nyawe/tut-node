import userRepository from "../repository/userRepository.js"
import httpStatus from "http-status"

const addNewUser = async(req,res)=>{
    const newUser = await userRepository.createUser(req.body);
    return res
      .status(httpStatus.CREATED)
      .json({ status: httpStatus.CREATED, message:"User Created Succesfully",data:newUser });
}
export default {addNewUser}