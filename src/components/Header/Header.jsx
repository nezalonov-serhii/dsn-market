import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/logo.svg";
import Heart from "../../../public/heart.svg";
import Shop from "../../../public/shop.svg";
import Burger from "../../../public/burger.svg";
import Search from "../../../public/search.svg";

import styles from "./header.module.css";

export default function HeaderLayout() {
   return (
      <header className={styles.sectionHeader}>
         <div className={styles.container}>
            <div className={styles.mainHeaderWrap}>
               <Link href="/">
                  <Image src={Logo} alt="Logo" className={styles.logo} />
               </Link>
               <div className={styles.contactsWrap}>
                  <a href="tel:+380979995086">+38 097 999 50 86</a>
                  <a href="tel:+380979995086">+38 097 999 50 86</a>
               </div>
               <div className={styles.shopWrap}>
                  <button className={styles.shopButton}>
                     <Image src={Heart} alt="Heart" />
                  </button>
                  <button className={styles.shopButton}>
                     <Image src={Shop} alt="Shop" />
                  </button>
               </div>
            </div>
            <div className={styles.secondHeaderWrap}>
               <button className={styles.shopButton}>
                  <Image src={Burger} alt="Shop" />
               </button>
               <input type="text" name="search" id={styles.search} />
               <Image src={Search} alt="Search" className={styles.searchImg} />
            </div>
         </div>
      </header>
   );
}
