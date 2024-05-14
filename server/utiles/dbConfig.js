const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("....connection successful....")
    } catch (error) {
        console.log("database connection failed...!!");
        process.exit(0);
    }
}
module.exports = connectdb;
