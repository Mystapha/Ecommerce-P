const mongoose = require("mongoose");
const { type } = require("os");

const CommandesSchema = new mongoose.Schema(
  {  imgprod:String,
     iduser:String,
     nameuser:String,
     nameproduct:String,
     date:String,
     prix:Number,
     status:{type:String, default:"non payé"}
  }
);

const Commande = mongoose.model("Commande", CommandesSchema);
module.exports = Commande;
