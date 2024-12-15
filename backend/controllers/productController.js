import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js"
// route for add product
const addProduct = async(req,res) =>{
    try {
         // Extracting fields from request body
         const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

         // Extracting images from request files
         const image1 = req.files?.image1?.[0];
         const image2 = req.files?.image2?.[0];
         const image3 = req.files?.image3?.[0];
         const image4 = req.files?.image4?.[0];
 
         // Collecting only defined images
         const images = [image1, image2, image3, image4].filter((item) => item !== undefined);
 

        // Uploading images to Cloudinary
        const imagesUrl = await Promise.all(
            images.map(async (item) => {
                const result = await cloudinary.uploader.upload(item.path, {
                    resource_type: "image"
                });
                return result.secure_url;
            })
        );
    
        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true" ? true : false,
            sizes:JSON.parse(sizes),
            Image: imagesUrl,
            date: Date.now()
        };

         // Saving product to the database
         const product = new productModel(productData);
         await product.save();
 
         res.json({ success: true, message: "Product Added" });
     } catch (error) {
         console.error(error);
         res.json({ success: false, message: error.message });
     }
   

}

// route for list product
const listProduct = async(req,res) =>{
    
}


// route for remove product
const removeProduct = async(req,res) =>{
    
}

// route for single product infomation
const singleProduct = async(req,res) =>{
    
}

export {addProduct, listProduct, removeProduct, singleProduct}