const mongoose = require('mongoose')

const subCategory = mongoose.Schema({
    name:{type:String , required:true}
})

module.exports = mongoose.model('subcategory',subCategory);