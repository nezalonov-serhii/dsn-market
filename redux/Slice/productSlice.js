import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   title: "Світлодіодні лампи LED Guarand 7S H1 ZES 5000k 6000Lm 12-24v",
   article: "101",
   image: "",
   price: 845,
   description:
      "'Кольоровий монітор 7' кріпиться на панель автомобіля чи в підголовник. Два відеовходи дозволяють підключити камеру заднього виду, фронтальну камеру, DVD магнітолу або GPS. Знімна рамка та ніжка. Є можливість підключення монітору тільки при подачі 12V(наприклад, при включенні заднього ходу), в інший час екран вимкнений. Розмір екрану: 7 дюймів Вхідна напруга: 12V Система: PAL/NTSC(Відео). Споживана потужність: 6Вт. 2 відеовходи. Подушка TFT LCS кольоровий монітор. Доступно для VCD/DVD/GPS/КАМЕРИ. Повнокольоровий дисплей, низьке споживання потужності.",
   contentsDelivery: [
      "1 TFT LCD кольоровий монітор",
      "Пульт дистанційного управління",
      "Посібник користувача",
   ],
};

const productSlice = createSlice({
   name: "product",
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

export const { increment, decrement } = productSlice.actions;
export default productSlice;
