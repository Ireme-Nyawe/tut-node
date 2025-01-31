import express from "express"
import user from "../modules/user.js";
const userRouter = express.Router()
userRouter.post("/user",user.createUser)
userRouter.get("/user",user.getAllUsers)
userRouter.get("/user/:id",user.getUserDetails)
userRouter.post("/login",user.userLogin)
export default userRouter;