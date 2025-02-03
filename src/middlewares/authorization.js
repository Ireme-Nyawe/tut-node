import Jwt from "jsonwebtoken"
import User from "../database/models/user.js";
const isUserAuthorized = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ status: 401, message: "login first!" });
  }

  const decoded = Jwt.verify(token,process.env.JWT_SECRET);
  const id = decoded.id;
  const loggedUser = await User.findById(id);
  if(!loggedUser){
    return res.status(404).json({ status: 404, message: "User not found!" });
  }

  console.log(loggedUser);
next()

};

export default isUserAuthorized;
