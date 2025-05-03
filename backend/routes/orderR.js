const express = require("express");
const router = express.Router();
const orderC = require("../controllers/orderC");

router.get("/", orderC.getOrder);

router.post("/post", orderC.createOrder);

router.put("/put/:orderId",orderC.updateOrder);

module.exports = router;