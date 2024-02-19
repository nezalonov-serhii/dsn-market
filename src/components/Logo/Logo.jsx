"use client";

import Image from "next/image";
import Link from "next/link";

import LogoImage from "../../../public/logo.svg";

import styles from "./logo.module.css";

export default function Logo() {
   return (
      <header className={styles.sectionHeader}>
         <div className={styles.container}>
            <div className={styles.mainHeaderWrap}>
               <Link href="/" className={styles.logoLink}>
                  <Image src={LogoImage} alt="Logo" className={styles.logo} />
                  <p className={styles.logoText}>DSNmarket</p>
               </Link>
            </div>
         </div>
      </header>
   );
}
