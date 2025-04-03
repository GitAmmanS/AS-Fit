const categories = require("../models/category");

exports.getCategories = async (req, resp) => {
    try {
        const data = await categories.find();
        if (data.length > 0) {
            resp.status(200).json({ success: true, data: data });
        } else {
            resp.status(404).json({ success: false, message: "No categories found" });
        }
    } catch (error) {
        console.error(error);
        resp.status(500).send("Internal Server Error");
    }
};
exports.createCategory = async (req, resp) => {
    try {
        const data = new categories({...req.body})
        await data.save();
        resp.status(200).json({ success: true, data: data });
        
    } catch (error) {
        console.error(error);
        resp.status(500).send("Internal Server Error");
    }
};