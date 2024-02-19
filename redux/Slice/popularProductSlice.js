import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   {
      id: 1,
      title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
      image: "",
      price: 845,
   },
   {
      id: 2,
      title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
      image: "",
      price: 845,
   },
   {
      id: 3,
      title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
      image: "",
      price: 845,
   },
   {
      id: 4,
      title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
      image: "",
      price: 845,
   },
   {
      id: 5,
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
