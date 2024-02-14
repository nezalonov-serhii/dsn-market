"use client";

import { useSelector } from "react-redux";

import styles from "./page.module.css";
import Products from "../components/Products/Products";

export default function Home() {
   const popularProducts = useSelector((state) => state.popularProducts);

   return (
      <main>
         <section className={styles.section}>
            {/* <div className={styles.container}>
               <Products title="Популярне" products={popularProducts} />
               <Products title="Щось новеньке" products={popularProducts} />
               <Products title="Спеціально для Вас" products={popularProducts} />
            </div> */}
         </section>
      </main>
   );
}
