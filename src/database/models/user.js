import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    names: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type: String,
      required: true,
    },
    profileImage:{
      type:String,
      required: false
    }
    
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);
export default User;
