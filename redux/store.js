import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./Slice/productSlice";
import popularProductReducer from "./Slice/popularProductSlice";
import allCategoriesReducer from "./Slice/allCategoriesSlice";
import categoriesReducer from "./Slice/categoriesSlice";
import basketReducer from "./Slice/basketSlice";

const store = configureStore({
   reducer: {
      product: productReducer,
      popularProducts: popularProductReducer,
      allCategories: allCategoriesReducer,
      categories: categoriesReducer,
      basket: basketReducer,
   },
});

export default store;
