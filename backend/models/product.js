const mongoose = require('mongoose')

const Products =  mongoose.Schema ({
    name:{type:String,required:true},
    description:{type:String},
    price:{type:Number , min:1, required:true},
    image:[{type:String}],
    Category:{type:mongoose.Schema.Types.ObjectId , ref:'category' ,required:true},
    subCategory:{type:mongoose.Schema.Types.ObjectId , ref:'subcategory', required:true},
    sizes:[{type:String , enum:["S","M","L","XL"] , required:true}],
    bestseller:{type:Boolean , default:false}
},{timestamps:true})


module.exports = mongoose.model('products',Products);