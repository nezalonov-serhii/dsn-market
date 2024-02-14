import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slice/productSlice";
import popularProductReducer from "./slice/popularProductSlice";

const store = configureStore({
   reducer: {
      product: productReducer,
      // popularProducts: popularProductReducer,
   },
});

export default store;
