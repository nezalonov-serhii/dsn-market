import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./slice/productSlice";
import popularProductReducer from "./slice/popularProductSlice";

const store = configureStore({
   reducer: {
      product: productSlice.reducer,
      popularProducts: popularProductReducer,
   },
});

export default store;
