const Order = require('../models/order')

exports.getOrder = async (req, res) => {
    try {
        const getOrder = await Order.find().populate('product.productId');

        res.status(200).json({
            success: true,
            data: getOrder
        })

    } catch (error) {
        console.log(error.message)
        res.status(200).json({
            success: false,
            message: error.message
        })
    }
}
exports.createOrder = async (req, res) => {
    try {
        const placeOrderObject = structuredClone(req.body.placeOrderForm);
        const cartItemsObject = structuredClone(req.body.cartItems);

        
        const cartItems = Object.entries(cartItemsObject);

       
        const products = [];

        cartItems.map(([productId, sizes]) => {
         
          const sizeMap = new Map();

          Object.entries(sizes).forEach(([size, quantity]) => {
            sizeMap.set(size, quantity); 
          });
    
          products.push({ productId, size: sizeMap });
        });

        const data = new Order({

            firstName: placeOrderObject.firstName,
            lastName: placeOrderObject.lastName,
            emailAddress: placeOrderObject.emailAddress,
            street: placeOrderObject.street,
            city: placeOrderObject.city,
            zipCode: placeOrderObject.zipCode,
            country: placeOrderObject.country,
            phone: placeOrderObject.phone,
            paymentMehod: placeOrderObject.paymentMehod,
            product: products,
            
            totalAmount: placeOrderObject.totalAmount

        });
        await data.save();

      
        res.status(200).json({
            success: true,
            data: data,
            message: "Successfully inserted data"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.updateOrder = async (req,res) =>{
            
    try {
        const updateData = await Order.updateOne(
            { _id: req.params.orderId },
            { $set: { orderStatus: req.body.orderStatus } }  
        );
        res.status(200).json({ message: 'Order status updated successfully', data: updateData });
    } catch (error) {
        console.error(error);  
        res.status(500).json({ message: 'An error occurred while updating the order', error: error.message });
    }
    
}