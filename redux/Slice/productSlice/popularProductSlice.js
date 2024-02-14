import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   {
      title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
      image: "",
      price: 845,
   },
   {
      title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
      image: "",
      price: 845,
   },
   {
      title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
      image: "",
      price: 845,
   },
   {
      title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
      image: "",
      price: 845,
   },
   {
      title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
      image: "",
      price: 845,
   },
];

const popularProductSlice = createSlice({
   name: "products",
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

export const { increment, decrement } = popularProductSlice.actions;
export default popularProductSlice.reducer;
