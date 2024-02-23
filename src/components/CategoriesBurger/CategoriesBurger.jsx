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
   const allCategories = useSelector((state) => state.allCategories);
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
            <Image src={Burger} alt="Shop" width="30" height="30" />
         </button>
         <input type="text" name="search" id={styles.search} />
         <Image src={Search} alt="Search" className={styles.searchImg} width="18" height="18" />

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
                  {allCategories.map((category) => {
                     return (
                        <li key={category.eng} className={styles.burgerItem}>
                           <Link
                              href={`/categories/${category.eng}`}
                              className={styles.burgerLink}
                              onClick={() => setOpenBurger(styles.burgerClose)}
                           >
                              {category.ua}
                              <Image
                                 src={Arrow}
                                 alt={`Navigate to  ${category.ua}`}
                                 className={styles.navArrow}
                                 width="8"
                                 height="12"
                              />
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
