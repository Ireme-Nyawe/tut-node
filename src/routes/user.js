import express from "express"
import user from "../controllers/user.js";
import isUserAuthorized from "../middlewares/authorization.js";
const userRouter = express.Router()
userRouter.post("/user",isUserAuthorized,user.createUser)
userRouter.get("/user",user.getAllUsers)
userRouter.get("/user/:id",user.getUserDetails)
userRouter.post("/login",user.userLogin)
export default userRouter;