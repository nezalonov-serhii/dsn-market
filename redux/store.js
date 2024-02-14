import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import popularProductReducer from "./slice/productSlice/popularProductSlice";

const store = configureStore({
   reducer: {
      product: productReducer,
      popularProducts: popularProductReducer,
      // Добавьте другие срезы по мере необходимости
   },
});

export default store;
