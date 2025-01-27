import User from "../database/models/user.js";

const createUser  = async (req,res) =>{
   try {
    const data = req.body
    const user = await User.create(data)
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
export default createUser;