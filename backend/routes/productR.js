const express = require('express')
const router=express.Router();

const productC=require("../controllers/productC");
const productPic = require('../middleware/picMiddleWare');

router.get("/",productC.getProduct);
router.post("/post",productPic.array("image",5),productC.postProduct);
// router.put('/update/:product_id', productPic.single('picture'), productC.productUpdate);
// router.delete('/delete/:product_id', productPic.single('picture'), productC.deleteProduct);

module.exports = router;
