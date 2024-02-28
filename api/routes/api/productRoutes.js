const express = require("express");
const authenticate = require("../../middlewares/authenticate");
const productController = require("../../controllers/productController");
const router = express.Router();
const { checkReqParams } = require("../../helpers");

// router.use(authenticate);

router.get("/", productController.getAllProduct);

router.get("/category-list", productController.getCategoriesList);

router.get("/main-page", productController.mainPageProduct);

router.get("/id/:id", productController.getProductById);

router.get("/:category", checkReqParams, productController.getProductByCategory);

module.exports = router;
