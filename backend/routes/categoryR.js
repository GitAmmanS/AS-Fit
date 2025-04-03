const express = require("express");
const router = express.Router();
const categoryC = require("../controllers/categoryC");

router.get("/", categoryC.getCategories);

router.post("/post", categoryC.createCategory);

// router.delete("/:category_name", categoryC.deleteCategory);

// router.put("/:category_name", categoryC.updateCategory);


module.exports = router;