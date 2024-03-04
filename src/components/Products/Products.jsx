"use client";

import Image from "next/image";

import ShopIcon from "../../../public/shop.svg";

import styles from "./products.module.css";
import Link from "next/link";

export default function Products({ products, title }) {
   return (
      <div className={styles.productsWrap}>
         <h3 className={styles.mainTitle}>{title}</h3>
         <ul className={styles.productList}>
            {products?.map((product) => {
               return (
                  <li key={product.title} className={styles.productItem}>
                     <Link href={`product/${product._id}`}>
                        <Image
                           src={product.images[0]}
                           alt={product.title}
                           className={styles.productItem}
                           width={300}
                           height={150}
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
