require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
cloudinary.config({
   cloud_name: CLOUDINARY_CLOUD_NAME,
   api_key: CLOUDINARY_API_KEY,
   api_secret: CLOUDINARY_API_SECRET,
   secure: true,
});

const uploadImage = async (imagePath) => {
   const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
   };

   try {
      const result = await cloudinary.uploader.upload(imagePath, {
         folder: "dsn/products",
      });

      return result;
   } catch (error) {
      console.error(error);
   }
};

const deleteImg = async (public_id) => {
   try {
      const result = await cloudinary.uploader.destroy(public_id);

      return result;
   } catch (error) {
      console.error(error);
   }
};
module.exports = {
   uploadImage,
   deleteImg,
};
