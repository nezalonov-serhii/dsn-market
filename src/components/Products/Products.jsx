"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

import Placeholder from "../../../public/11559.jpg";
import ShopIcon from "../../../public/shop.svg";

import styles from "./products.module.css";
import Link from "next/link";

export default function Products({ products, title }) {
   return (
      <div className={styles.productsWrap}>
         <h3 className={styles.mainTitle}>{title}</h3>
         <ul className={styles.productList}>
            {products.map((product) => {
               return (
                  <li key={product.title} className={styles.productItem}>
                     <Link href="product">
                        <Image
                           src={Placeholder}
                           alt={product.title}
                           className={styles.productItem}
                        ></Image>
                        <div className={styles.productTitleWrap}>
                           <p className={styles.productTitle}>{product.title}</p>
                           <div className={styles.productPriceWrap}>
                              <p className={styles.productPrice}>{product.price} грн.</p>
                              <button className={styles.productBuyBtn}>
                                 <Image src={ShopIcon} alt={product.title} width={30}></Image>
                              </button>
                           </div>
                        </div>
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
