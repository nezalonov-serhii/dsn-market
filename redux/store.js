import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./Slice/productSlice";
import popularProductReducer from "./Slice/popularProductSlice";
import categoriesReducer from "./Slice/categoriesSlice";
import basketReducer from "./Slice/basketSlice";

const store = configureStore({
   reducer: {
      product: productReducer,
      popularProducts: popularProductReducer,
      categories: categoriesReducer,
      basket: basketReducer,
   },
});

export default store;
