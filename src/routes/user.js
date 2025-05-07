import express from "express"
import user from "../controllers/user.js";
import isUserAuthorized from "../middlewares/authorization.js";
import { bodyValidation } from "../middlewares/bodyValidation.js";
import { newUserSchema } from "../modules/user/validation/userValidation.js";
import { isUserExist } from "../middlewares/userMiddleware.js";
import userController from "../modules/user/controllers/userController.js";
const userRouter = express.Router()
userRouter.post("/user",bodyValidation(newUserSchema),isUserExist,userController.addNewUser)
userRouter.get("/user",user.getAllUsers)
userRouter.get("/user/:id",user.getUserDetails)
userRouter.post("/login",user.userLogin)
export default userRouter;