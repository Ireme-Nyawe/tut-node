import User from "../../../database/models/user.js"

const createUser = async (userData)=>{
return await User.create(userData)
}
const findUser =async(email)=>{
    return await User.findOne({email})
}
export default {createUser,findUser}