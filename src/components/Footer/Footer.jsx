import Link from "next/link";
import { useSelector } from "react-redux";

import styles from "./footer.module.css";

export default function FooterLayout() {
   return (
      <footer className={styles.sectionFooter}>
         <div className={styles.container}>
            <ul className={styles.list}>
               <li>
                  <Link href="/contacts">Контактна інформація</Link>
               </li>

               <li>
                  <Link href="/delivery">Оплата и доставка</Link>
               </li>
               <li>
                  <Link href="/about-us">Про нас</Link>
               </li>
            </ul>
         </div>
      </footer>
   );
}
