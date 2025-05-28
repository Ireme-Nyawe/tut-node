import { uploadToCloud } from "../../../helpers/cloudinary.js";
import userRepository from "../repository/userRepository.js"
import httpStatus from "http-status"

const addNewUser = async(req,res)=>{
  const profileImage = await uploadToCloud(req.file);
  const userData ={ ...req.body,profileImage}
    const newUser = await userRepository.createUser(userData);
    return res
      .status(httpStatus.CREATED)
      .json({ status: httpStatus.CREATED, message:"User Created Succesfully",data:newUser });
}
export default {addNewUser}