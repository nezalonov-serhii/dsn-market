import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./Slice/productSlice";
import popularProductReducer from "./Slice/popularProductSlice";
import categoriesReducer from "./Slice/categoriesSlice";

const store = configureStore({
   reducer: {
      product: productReducer,
      popularProducts: popularProductReducer,
      categories: categoriesReducer,
   },
});

export default store;
