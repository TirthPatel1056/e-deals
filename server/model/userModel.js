const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name: {
        required: true, 
        type: String,
        trim: true
    },
    
    lname: {
        required: true, 
        type: String,
        trim: true
    },

    email: {
        required: true,
        type: String,
        unique: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    cpassword: {
        type: String,
        required: true,
        trim: true
    },

    role: {
        required: true,
        type: String,
        default: "User",
    },

});

const User = new mongoose.model("User", userSchema);

module.exports = User;