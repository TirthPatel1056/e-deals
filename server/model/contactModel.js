const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },

    email: {
        required: true,
        type: String,
        unique: true,
        trim: true,
    },

    message: {
        required: true,
        type: String,
    },



});

const Contact = new mongoose.model("Contact", contactSchema);

module.exports = Contact;