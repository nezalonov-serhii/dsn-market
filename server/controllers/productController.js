const product = require("../models/productModel");
const categoriesModel = require("../models/categoriesModel");
const { ctrlWrapper } = require("../helpers/index");

const getAllProduct = async (req, res, next) => {
   const products = await product.find();
   res.status(200).json(products);
};

const getCategoriesList = async (req, res, next) => {
   const result = await categoriesModel.find();
   res.status(200).json(result);
};

const mainPageProduct = async (req, res, next) => {
   const page = req.query.page || 1;
   const perPage = 10;

   const result = await product
      .find()
      .skip((page - 1) * perPage)
      .limit(perPage);
   res.status(200).json(result);
};

const getProductByCategory = async (req, res, next) => {
   const { category } = req.params;
   const page = req.query.page || 1;
   const perPage = 10;

   const result = await product
      .find({ "category.value": category })
      .skip((page - 1) * perPage)
      .limit(perPage);

   if (!result || result.length === 0) {
      return res.status(404).json({
         message: "Products not found for the specified category",
      });
   }

   res.status(200).json(result);
};

const getProductById = async (req, res, next) => {
   const { id } = req.params;

   const result = await product.findById(id);

   if (!result) {
      res.status(404).json({
         code: 404,
         message: "Products not found",
         data: [],
      });
   }

   res.status(200).json(result);
};

module.exports = {
   getAllProduct: ctrlWrapper(getAllProduct),
   getCategoriesList: ctrlWrapper(getCategoriesList),
   mainPageProduct: ctrlWrapper(mainPageProduct),
   getProductByCategory: ctrlWrapper(getProductByCategory),
   getProductById: ctrlWrapper(getProductById),
};
