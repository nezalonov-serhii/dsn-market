import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slice/productSlice";

const store = configureStore({
   reducer: {
      product: productReducer,
      // Добавьте другие срезы по мере необходимости
   },
});

export default store;
