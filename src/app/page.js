"use client";

import { useSelector } from "react-redux";

import styles from "./page.module.css";
import Products from "../components/Products/Products";
import { useEffect, useState } from "react";

export default function Home() {
   const popularProducts = useSelector((state) => state.popularProducts);

   const [product, setProduct] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch("http://localhost:3000/api/products");
            if (!response.ok) {
               throw new Error("Network response was not ok");
            }

            const product = await response.json();
            setProduct(product);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };

      fetchData();
   }, [setProduct]);

   return (
      <main>
         {product && (
            <ul>
               {product.map((pro) => (
                  <li key={pro.id}>{pro.title}</li>
               ))}
            </ul>
         )}

         <section className={styles.section}>
            <div className={styles.container}>
               <Products title="Популярне" products={popularProducts} />
               <Products title="Щось новеньке" products={popularProducts} />
               <Products title="Спеціально для Вас" products={popularProducts} />
            </div>
         </section>
      </main>
   );
}
