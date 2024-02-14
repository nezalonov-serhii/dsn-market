import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./Slice/productSlice";
import popularProductReducer from "./Slice/popularProductSlice";

const store = configureStore({
   reducer: {
      product: productReducer,
      popularProducts: popularProductReducer,
   },
});

export default store;
