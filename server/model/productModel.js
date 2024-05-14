const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name: {
        required: true, 
        type: String,
    },

    price:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    mediaUrl:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    cartQuantity:{
        type:Number,
        default:1
    },
    totalPrice:{
        type:Number,
    }

});

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;