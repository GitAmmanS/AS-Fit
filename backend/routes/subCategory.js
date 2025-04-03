const express = require("express");
const router = express.Router();
const subCategoryC = require("../controllers/subCategory");

router.get("/", subCategoryC.getSubCategories);

router.post("/post", subCategoryC.createSubCategory);

// router.delete("/:subcategory_name", subCategoryC.deleteSubCategory);

// router.put("/:subcategory_name", subCategoryC.updateSubCategory);


module.exports = router;