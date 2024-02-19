"use client";

import Image from "next/image";
import Link from "next/link";

import Heart from "../../../public/heart.svg";
import Shop from "../../../public/shop.svg";

import styles from "./header.module.css";
import CategoriesBurger from "../CategoriesBurger/CategoriesBurger";
import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";

export default function HeaderLayout() {
   const baskets = useSelector((state) => state.basket);
   return (
      <header className={styles.sectionHeader}>
         <div className={styles.container}>
            <div className={styles.mainHeaderWrap}>
               <Logo href="/"></Logo>
               <div className={styles.contactsWrap}>
                  <a href="tel:+380979995086">+38 097 999 50 86</a>
                  <a href="tel:+380979995086">+38 097 999 50 86</a>
               </div>
               <div className={styles.shopWrap}>
                  <button className={styles.shopButton}>
                     <Image src={Heart} alt="Heart" />
                  </button>
                  <Link href="/basket">
                     <button className={styles.shopButton}>
                        <Image src={Shop} alt="Shop" />
                        {baskets.length > 0 && (
                           <span className={styles.amount}>{baskets.length}</span>
                        )}
                     </button>
                  </Link>
               </div>
            </div>
            <CategoriesBurger />
         </div>
      </header>
   );
}
