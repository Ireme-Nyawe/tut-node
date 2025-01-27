import express from "express";
import dotenv from "dotenv";

import dbConnection from "./database/config/connection.js";
import userRouter from "./routes/user.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/move-api",userRouter)
app.use((req, res) => {
  res.status(404).json({ 
    message: 'Endpoint not found. Please check the URL very well!',
  });
});
app.get("/",(req,res)=>{
  res.status(404).json({
    message: 'Back End setted successfully!',
  });
})
const port = process.env.PORT;

dbConnection()
  .then(() => {
    app.listen(port, () => console.log(`App running on PORT ${port}`));
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
