const mongoose = require('mongoose')

const Order = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] },
    street: { type: String },
    city: { type: String, required: true },
    zipCode: { type: Number, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    paymentMethod: { type: String },
    paymentStatus: { type: String , enum:['pending','resolved'],default:'pending'},
    product: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'products' },
           size:{
            type:Map,
            of:Number,
            required:true
           },
        }

    ],
    orderStatus: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    totalAmount: { type: Number, required: true }
}, { timestamps: true })

module.exports = mongoose.model('orders', Order);