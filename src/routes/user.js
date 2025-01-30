import express from "express"
import user from "../modules/user.js";
const userRouter = express.Router()
userRouter.post("/create-user",user.createUser)
userRouter.get("/view-users",user.getAllUsers)
userRouter.get("/view-user/:id",user.getUserDetails)
export default userRouter;