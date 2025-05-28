import dbConnection from "../config/connection.js";
import { seedUsers } from "./userSeeders.js";

dbConnection().then(()=>{
    seedUsers()
})