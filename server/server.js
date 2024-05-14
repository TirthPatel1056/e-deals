require("dotenv").config();

const express = require("express");
const app = express();
const cors = require('cors')
const appRouter = require("./router/auth-router");
const adminRouter = require("./router/auth-admin-router");
const contactRouter = require("./router/contact-router")
const sigleProDetail  = require("./router/product-router")
const allProductRoute  = require("./router/product-router")
const orderRouter = require("./router/order-router")
const bodyParser = require('body-parser')
const connectdb = require("./utiles/dbConfig");

const corsOptions = {
    origin: "*",
    // methods: ["POST", "GET", "PUT", "DELETE"],
    // credentials: true
};


app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use("/", allProductRoute);

app.use("/product-details/:_id", sigleProDetail);

app.use("/user", appRouter);

app.use("/admin", adminRouter);

app.use("/api/form", contactRouter);






app.get("/xyz", (res) => {
    res.status(200).json({msg:"i am xyz....."})
});

// app.get("/ord", (req, res) => {
//     res.send("reg is running....");
// });

const port = 4000
connectdb().then(() => {
    app.listen(port, () => {
        console.log(`Server is Running at Port: ${port}`)
    })
});