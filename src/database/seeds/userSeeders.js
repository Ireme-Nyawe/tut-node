import { hasPassword } from "../../helpers/authHelper.js";
import dbConnection from "../config/connection.js";
import User from "../models/user.js";

const seedUsers = async () => {
  const users = [
    {
      names: "Mucyo John",
      email: "mucyo.john@example.com",
      password: await hasPassword("SecurePass123!"),
      role: "admin",
    },
    {
      names: "Muhire Alice",
      email: "muhire.alice@example.com",
      password: await hasPassword("Password456!"),
      role: "editor",
    },
    {
      names: "Mukiza David",
      email: "mukiza.david@example.com",
      password: await hasPassword("MyPassword789!"),
      role: "user",
    },
  ];
  await User.insertMany(users);
  console.log("seeders added well");
};
dbConnection().then(()=>{
    seedUsers();
})
