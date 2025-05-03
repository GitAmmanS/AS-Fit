const Product = require('../models/product');
const Category = require('../models/category')
const subCategory = require('../models/subCategory')
exports.postProduct = async (req, res) => {
    try {
        console.log(req.body);
        // destructuring the data for front end api
       
        const imageUrls = req.files.map(file => `${file.filename}`);

        const categoryData = await Category.findOne({ name: req.body.category })
        const subCategoryData = await subCategory.findOne({ name: req.body.subcategory })

        if (!imageUrls) {
            return res.status(400).send('Picture is required');
        }

        const data = new Product({
            image: imageUrls,
            subCategory: subCategoryData._id || '',
            Category: categoryData._id || '',
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
        const data = await Product.find().populate('Category').populate('subCategory');

        if (data.length > 0) {
            res.status(200).json({
                success: true,
                data:data
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