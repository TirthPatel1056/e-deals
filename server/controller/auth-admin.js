

const User = require("../model/userModel");




const alluserOnAdmin = async (req, res) => {
    res.send("app is running via controller again....");

    // try {
    //     const allUsers = await User.find();
    //     console.log(allUsers)
    //     res.status(200).json({ data: allUsers });
    


    // } catch (error) {
    //     res.status(500).json("internal server error...!!");

    // }
};


module.exports = { alluserOnAdmin }