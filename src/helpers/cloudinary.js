import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();
cloudinary.v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
export const uploadToCloud = async (file) => {
  try {
    const profilePicture = await cloudinary.v2.uploader.upload(file.path, {
      folder: "images",
      use_filename: true,
    });
    return profilePicture.secure_url;
  } catch (error) {
    throw error;  // Throw the error so controller can handle it
  }
};

