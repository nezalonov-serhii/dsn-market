const { uploadImage, deleteImg } = require("../helpers/cloudinary");

const Product = require("../models/productModel");
const CategoriesModel = require("../models/categoriesModel");
const { ctrlWrapper } = require("../helpers/index");

const getAllProduct = async (req, res, next) => {
   const products = await Product.find();
   res.status(200).json(products);
};

const createProduct = async (req, res, next) => {
   const { title, category, description, price, contentsDelivery, subcategories } = req.body;
   const images = req.files; // Теперь изображения приходят как файлы

   // Проверяем, есть ли массив файлов изображений
   if (!images || images.length === 0) {
      return res.status(400).json({ error: "Image files are required" });
   }

   try {
      // Находим максимальный артикул в базе
      const maxArticle = await Product.find({}, { article: 1 }).sort({ article: -1 }).limit(1);

      // Создаем новый продукт с учетом данных из запроса и URL загруженных изображений
      const newProduct = new Product({
         title,
         category,
         subcategories,
         description,
         price,
         images: await Promise.all(images.map(async (file) => await uploadImage(file.path, title))),
         contentsDeliver: JSON.parse(contentsDelivery),
         article: maxArticle[0]?.article ? maxArticle[0].article + 1 : 0, // Увеличиваем максимальный артикул на 1
      });

      // Сохраняем продукт в базе данных
      const savedProduct = await newProduct.save();

      // Возвращаем созданный продукт в ответе

      res.status(201).json(savedProduct);
   } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "Internal Server Error" });
   }
};

const deleteProduct = async (req, res, next) => {
   const { id } = req.params;

   const deleted = await Product.findByIdAndDelete(id);

   if (deleted.imgPublicId) {
      await deleteImg(deleted.title);
   }

   res.status(204).json({
      message: `Product deleted`,
   });
};

const getCategoriesList = async (req, res, next) => {
   const result = await CategoriesModel.find();
   res.status(200).json(result);
};

const mainPageProduct = async (req, res, next) => {
   const perPage = 10;

   const popularProducts = await Product.find({ popular: { $gt: 0 } }) // Используем $gt (greater than) для поиска продуктов с popular > 0
      .limit(perPage);

   // Получаем последние 10 созданных продуктов
   const latestProducts = await Product.find()
      .sort({ createdAt: -1 }) // Сортируем по убыванию даты создания
      .limit(perPage);

   res.status(200).json({ popularProducts, latestProducts });
};

const getProductByCategory = async (req, res, next) => {
   const { category } = req.params;
   const page = req.query.page || 1;
   const perPage = 10;

   const result = await Product.find({ "category.value": category })
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

   const result = await Product.findById(id);

   if (!result) {
      res.status(404).json({
         code: 404,
         message: "Products not found",
         data: [],
      });
   }

   await Product.updateOne({ _id: id }, { $inc: { popular: 1 } });

   res.status(200).json(result);
};

module.exports = {
   getAllProduct: ctrlWrapper(getAllProduct),
   deleteProduct: ctrlWrapper(deleteProduct),
   getCategoriesList: ctrlWrapper(getCategoriesList),
   mainPageProduct: ctrlWrapper(mainPageProduct),
   getProductByCategory: ctrlWrapper(getProductByCategory),
   getProductById: ctrlWrapper(getProductById),
   createProduct: ctrlWrapper(createProduct),
};

