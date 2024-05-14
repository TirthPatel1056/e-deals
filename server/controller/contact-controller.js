const contact = require("../model/contactModel");

const contactForm = async (req, res) => {
    res.send("hii from contact")
    try {
        const response = req.body;
        await contact.create(response);
        return res.status(200).json({ message: "Message send successfully...!" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong, try again...!" })

    }
}

module.exports = contactForm;