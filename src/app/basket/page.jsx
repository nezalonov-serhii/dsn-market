"use client";

import { useSelector } from "react-redux";
import Link from "next/link";

import Image from "next/image";

import Product from "../../../public/11559.jpg";
import Minus from "../../../public/minus.svg";
import Plus from "../../../public/plus.svg";

import styles from "./basket.module.css";

export default function Basket() {
   const baskets = useSelector((state) => state.basket);

   return (
      <section className={styles.section}>
         <div className={styles.container}>
            <h1 className={styles.primeTitle}>Кошик</h1>
            <ul className={styles.list}>
               {baskets.map((product) => {
                  return (
                     <li key={product.id} className={styles.item}>
                        <div className={styles.imageWrap}>
                           <Image
                              src={Product}
                              alt={product.title}
                              className={styles.image}
                           ></Image>
                           <h2 className={styles.productTitle}>{product.title}</h2>
                           <button type="button" className={styles.piceWrap}>
                              X
                           </button>
                        </div>

                        <div className={styles.piceWrap}>
                           <div className={styles.amountWrap}>
                              <button type="button">
                                 <Image src={Minus} alt="Minus"></Image>
                              </button>
                              <p>{product.amount}</p>
                              <button type="button">
                                 <Image src={Plus} alt="Plus"></Image>
                              </button>
                           </div>
                           <p className={styles.price}>{product.price} грн.</p>
                        </div>
                     </li>
                  );
               })}
            </ul>

            <button className={styles.amountButton}>Оформити замовлення</button>
         </div>
      </section>
   );
}
