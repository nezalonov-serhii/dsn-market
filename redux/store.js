import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice/counterSlice";

const store = configureStore({
   reducer: {
      counter: counterReducer,
      // Добавьте другие срезы по мере необходимости
   },
});

export default store;
