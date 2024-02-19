"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

import Burger from "../../../public/burger.svg";
import Search from "../../../public/search.svg";
import Arrow from "../../../public/arrow.svg";
import Close from "../../../public/close.svg";

import styles from "./categoriesBurger.module.css";
import { useEffect, useState } from "react";
import { useScreenWidth } from "../../../hooks";

export default function CategoriesBurger() {
   const categories = useSelector((state) => state.categories);
   const [openBurger, setOpenBurger] = useState(styles.burgerClose);

   const { mobile } = useScreenWidth();

   useEffect(() => {
      if (mobile) {
         openBurger !== styles.burgerClose
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
      }

      return () => {
         document.body.style.overflow = "auto";
      };
   }, [mobile, openBurger]);

   return (
      <div className={styles.secondHeaderWrap}>
         <button className={styles.shopButton} onClick={() => setOpenBurger(styles.burgerOpen)}>
            <Image src={Burger} alt="Shop" />
         </button>
         <input type="text" name="search" id={styles.search} />
         <Image src={Search} alt="Search" className={styles.searchImg} />

         {/* Burger  */}
         <div className={openBurger}>
            <Image
               src={Close}
               alt="Close Button"
               className={styles.burgerCloseBtn}
               onClick={() => setOpenBurger(styles.burgerClose)}
            />
            <h3 className={styles.burgerTitle}>Каталог</h3>
            <nav>
               <ul className={styles.burgerList}>
                  {categories.map((category) => {
                     return (
                        <li key={category.eng} className={styles.burgerItem}>
                           <Link href={`/${category.eng}`} className={styles.burgerLink}>
                              {category.ua}
                              <Image src={Arrow} alt={`Navigate to  ${category.ua}`}></Image>
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>
         </div>
      </div>
   );
}
