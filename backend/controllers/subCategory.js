const subCategories = require("../models/subCategory");

exports.getSubCategories = async (req, resp) => {
    try {
        const data = await subCategories.find();
        if (data.length > 0) {
            resp.status(200).json({ success: true, data: data });
        } else {
            resp.status(404).json({ success: false, message: "No subCategories found" });
        }
    } catch (error) {
        console.error(error);
        resp.status(500).send("Internal Server Error");
    }
};
exports.createSubCategory = async (req, resp) => {
    try {
        const data = new subCategories({...req.body})
        await data.save();
        resp.status(200).json({ success: true, data: data });
        
    } catch (error) {
        console.error(error);
        resp.status(500).send("Internal Server Error");
    }
};