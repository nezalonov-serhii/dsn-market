"use client";

import { useSelector } from "react-redux";
import Image from "next/image";

import Product from "../../../public/11559.jpg";

import styles from "./productCard.module.css";

export default function ProductCard() {
   const product = useSelector((state) => state.product);

   return (
      <section className={styles.section}>
         <div className={styles.container}>
            <h2 className={styles.title}>{product.title}</h2>
            <p className={styles.article}>арт. {product.article}</p>
            <div className={styles.imageWrap}>
               <Image className={styles.image} src={Product} alt={product.title} />
               <div className={styles.wrapPrice}>
                  <p className={styles.price}>{product.price} грн.</p>
                  <button className={styles.buttonBuy}>КУПИТИ</button>
               </div>
            </div>
            <h3 className={styles.decr}>Опис</h3>
            <p className={styles.decrText}>{product.description}</p>

            <div>
               <p className={styles.contentsTitle}>Комплект поставки:</p>
               <ol className={styles.contentsList}>
                  {product.contentsDelivery.map((content) => {
                     return (
                        <li key={content} className={styles.contentsItem}>
                           <p>{content}</p>
                        </li>
                     );
                  })}
               </ol>
            </div>
         </div>
      </section>
   );
}
