import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   {
      id: 1,
      title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
      image: "",
      price: 845,
      amount: 1,
   },
   {
      id: 1,
      title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
      image: "",
      price: 845,
      amount: 1,
   },
];

const basketSlice = createSlice({
   name: "basket",
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

export const { increment, decrement } = basketSlice.actions;
export default basketSlice.reducer;
