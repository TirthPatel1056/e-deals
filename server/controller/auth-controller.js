

const User = require("../model/userModel");
const Cart = require("../model/cartModel")
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Order = require("../model/allOrderModel");



const order = async (req, res) => {
    // res.send("app is running via controller again....");
    res.status(200).json({msg:"i am xyz....."})

}

const singleOrder = async (res) => {
    // res.status(200).json({msg:"i am xyz....."})
    
    // res.send("singleOrder is running ../////....");

    // console.log("hiiiiiii")

    try {
        const {user, name, lname, email, phone, city, state, zip, products } = req.body;
        console.log(req.body);

        const ordercreated = await Order.create({ user, name, lname, email, phone, city, state, zip, products });
        res.status(200).json({ msg: ordercreated });


    } catch (error) {
        res.status(500).json("internal server error");
    }
};


const registration = async (req, res) => {
    // res.send("registration is running ../////....");

    try {
        const { name, email, password, cpassword, lname } = req.body;
        console.log(req.body);

        const userexist = await User.findOne({ email });

        if (userexist) {
            return res.status(400).json({ msg: "email alreadt exist...!", result: false })
        }

        const hashedPassword = await bycrypt.hash(password, 10);
        const hashedcPassword = await bycrypt.hash(cpassword, 10);


        const usercreated = await User.create({ name, email, password: hashedPassword, cpassword: hashedcPassword, lname });
        res.status(200).json({ msg: usercreated });
        await new Cart({user:usercreated._id}).save();

    } catch (error) {
        res.status(500).json("internal server error");
    }
};

const login = async (req, res) => {
    res.send("login is running ../////....");

    try {
        const { email, password } = req.body;
        console.log(req.body);
        const userexist = await User.findOne({ email });
        console.log(userexist)
        if (!userexist) {
            return res.status(404).json({ msg: "Invalid Credentials...!" })

        }

        const comparePassword = await bycrypt.compare(password, userexist.password);


        const tokenData = {
            id: userexist._id,
            email: userexist.email
        }

        // const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1h" })
        // console.log(token)
        // localStorage.setItem("token", JSON.stringify(token))
        if (comparePassword) {
            const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: "1h" })
            console.log(token)
            return res.status(200).json({ msg: "login succesfully...!", authToken: token, data: userexist })
        }
        else {
            return res.status(404).json({ msg: "user not found...!" })
        }
    } catch (error) {
        res.status(500).json("internal server error");

    }
};

const UserDetails = async (req, res) => {
    res.send("app is running via controller again....");

    try {

        const { token } = req.body;
        console.log(token, "<-----...Req,body---token,,,");

        const user = jwt.verify(token, process.env.TOKEN_SECRET)
        console.log(user.email)

        const existUserData = await User.findOne({ email: user.email });
        console.log(existUserData)

        res.status(200).json({ data: existUserData });

    } catch (error) {
        res.status(500).json("internal server error to get User details..!!");

    }
};

module.exports = { registration, login, UserDetails, singleOrder, order}