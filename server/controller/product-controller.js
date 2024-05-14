const Product = require("../model/productModel");
const connectdb = require("../utiles/dbConfig");

const home = async (req, res) => {
    await connectdb();
    const { category, name, price } = req.query;
    const queryCatObj = {};

    if (category) {
        queryCatObj.category = category;
    }
    if (price) {
        queryCatObj.price = price;
    }
    if (name) {
        queryCatObj.name = { $regex: name, $options: "i" };
    }

    const productdata = await Product.find(queryCatObj);

    return res.json({ productdata });
}

const sigleProDetail = async (req, res) => {
    await connectdb();
    // const { _id } = params;
    var _id = req.params._id

    console.log(_id, "....params...")

    const product = await Product.findById({ _id });
    console.log(product, "....product");
    return res.json({ product });

}



module.exports = { home, sigleProDetail }