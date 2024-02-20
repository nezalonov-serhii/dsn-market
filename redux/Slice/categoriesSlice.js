import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   eng: "autoelectronics",
   ua: "Автоелектроніка",
   subcategories: [
      { value: "video-recorders", label: "Відеореєстратори" },
      { value: "window-closers", label: "Доводчики вікон" },
      { value: "navigation", label: "Навігація" },
      { value: "seat-heaters", label: "Підігрів сидінь" },
      { value: "parking-systems", label: "Паркувальні системи" },
   ],
   products: [
      {
         id: 1,
         title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
         image: "",
         price: 845,
      },
      {
         id: 2,
         title: "Лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
         image: "",
         price: 45,
      },
   ],
};

const categoriesSlice = createSlice({
   name: "categories",
   initialState,

   reducers: {
      increment: (state) => {
         state.value += 1;
      },
      decrement: (state) => {
         state.value -= 1;
      },
   },
});

export const { increment, decrement } = categoriesSlice.actions;
export default categoriesSlice.reducer;
