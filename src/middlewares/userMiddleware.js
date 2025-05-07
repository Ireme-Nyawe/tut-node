import userRepository from "../modules/user/repository/userRepository.js";
import httpStatus from "http-status"

export const isUserExist = async (req, res, next) => {
  const { email } = req.body;
  const user = await userRepository.findUser(email)
  if(user){
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ status: httpStatus.BAD_REQUEST, message:"user with same email exist, try another eamil!" });
  }
  return next()
};
