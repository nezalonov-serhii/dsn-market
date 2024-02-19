import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   { eng: "autoelectronics", ua: "Автоелектроніка" },
   { eng: "car-audio", ua: "Автозвук" },
   { eng: "auto-light", ua: "Авто світло" },
   { eng: "multimedia", ua: "Автомагнітоли / Мультимедія" },
   { eng: "accessories", ua: "Головні пристрої / Аксесуари" },
   { eng: "security-systems", ua: "Охоронні системи" },
   { eng: "brand-souvenirs", ua: "Брендові сувеніри" },
];

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
