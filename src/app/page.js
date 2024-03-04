"use client";
import { useState, useEffect } from "react";
import Products from "../components/Products/Products";

import styles from "./page.module.css";

const URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
   const [products, setProducts] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`${URL}api/products/main-page`);
            if (response.ok) {
               const data = await response.json();
               setProducts(data);
            } else {
               console.error("Failed to fetch data");
            }
         } catch (error) {
            console.error("Error during data fetching:", error);
         }
      };

      fetchData();
   }, []);

   return (
      <main>
         <section className={styles.section}>
            <div className={styles.container}>
               <Products title="Щось новеньке" products={products.latestProducts} />
               <Products title="Популярне" products={products.popularProducts} />
            </div>
         </section>
      </main>
   );
}
