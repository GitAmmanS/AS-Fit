const Product = require('../models/product');
const Category = require('../models/category')
const subCategory = require('../models/subCategory')
exports.postProduct = async (req, res) => {
    try {
        const imageUrls = req.files.map(file => `/public/${file.filename}`);
        //checking for category and subcategory
        const categoryData = await Category.findOne({ name: req.body.category })
        const subCategoryData = await subCategory.findOne({ name: req.body.subcategory })

        const category_id = categoryData._id;
        const subCategory_id = subCategoryData._id;

        if (!imageUrls) {
            return res.status(400).send('Picture is required');
        }

        const data = new Product({
            image: imageUrls,
            subCategory: subCategory_id,
            Category: categoryData._id,
            ...req.body
        })
        await data.save();
        res.status(200).json({
            data: data,
            message: "Product Inserted Successfully"
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
exports.getProduct = async (req, res) => {
    try {
        const data = await Product.find({ name: { $regex: req.params.name, $options: 'i' } }).populate('category').populate('sub-category');

        if (data.length > 0) {
            res.status(200).json({
                success: true,
                message: 'Successfully recieved data'
            })
        }
        else {
            return res.status(404).json({
                success: false,
                message: 'Products not found'
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}