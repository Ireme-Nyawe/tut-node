import express from "express"
import createUser from "../modules/user.js";
const userRouter = express.Router()
userRouter.post("/create-user",createUser)
export default userRouter;