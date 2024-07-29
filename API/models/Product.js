const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const { type } = require("os");

const ProductSchema = new mongoose.Schema(
 {imgprod:String,
  name:String,
  description:Array,
  categorie:String,
  price:Number,
  status:{type:String, default:"favorite"}

 }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
