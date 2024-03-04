"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./productCard.module.css";

const URL = process.env.NEXT_PUBLIC_API_URL;

export default function ProductCard({ params }) {
   const [productData, setProductData] = useState(null);

   useEffect(() => {
      const fetchProduct = async () => {
         try {
            const response = await fetch(`${URL}api/products/${params.product}`);

            if (!response.ok) {
               throw new Error("Failed to fetch product data");
            }

            const productData = await response.json();
            setProductData(productData);
         } catch (error) {
            console.error("Error fetching product data:", error);
         }
      };

      if (params.product) {
         fetchProduct();
      }
   }, [params.product]);

   if (!productData) {
      return <div>Loading...</div>;
   }

   return (
      <section className={styles.section}>
         <div className={styles.container}>
            <h2 className={styles.title}>{productData.title}</h2>
            <p className={styles.article}>арт. {productData.article}</p>
            <div className={styles.imageWrap}>
               <Image
                  className={styles.image}
                  src={productData.images[0]}
                  alt={productData.title}
                  width={200}
                  height={200}
               />
               <div className={styles.wrapPrice}>
                  <p className={styles.price}>{productData.price} грн.</p>
                  <button className={styles.buttonBuy}>КУПИТИ</button>
               </div>
            </div>
            <h3 className={styles.decr}>Опис</h3>
            <p className={styles.decrText}>{productData.description}</p>

            <div>
               <p className={styles.contentsTitle}>Комплект поставки:</p>
               <ol className={styles.contentsList}>
                  {productData.contentsDelivery.map((content, index) => (
                     <li key={index} className={styles.contentsItem}>
                        <p>{content}</p>
                     </li>
                  ))}
               </ol>
            </div>
         </div>
      </section>
   );
}
