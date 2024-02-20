"use client";

import { useSelector } from "react-redux";
import Select from "react-select";
import Link from "next/link";
import Image from "next/image";

import PlaceHolder from "../../../public/11559.jpg";
import Shop from "../../../public/shop.svg";

import styles from "./category.module.css";
import { useEffect, useState } from "react";

const options = [
   { value: "new-items", label: "Новинки" },
   { value: "az", label: "По назві (А-Я)" },
   { value: "za", label: "По назві (Я-А)" },
   { value: "cheapest", label: "Від дешвих до дорогих" },
   { value: "expensive", label: "Від дорогих до дешевих" },
];

export default function Category({ params }) {
   const categories = useSelector((state) => state.categories);

   const [subcategories, setSubcategories] = useState(categories.subcategories[0]);
   const [subcategoriesSort, setSubcategoriesSort] = useState(options[0].value);

   const handleChange = (selectedOption) => {
      console.log(`Option selected:`, selectedOption);
      setSubcategories(selectedOption);
   };

   const handleChangeSort = (selectedOption) => {
      console.log(`Sort option selected:`, selectedOption);
      setSubcategoriesSort(selectedOption.value);
   };

   const applySorting = (products, sortOption) => {
      switch (sortOption) {
         case "cheapest":
            return [...products].sort((a, b) => a.price - b.price);
         case "expensive":
            return [...products].sort((a, b) => b.price - a.price);
         case "az":
            return [...products].sort((a, b) => a.title.localeCompare(b.title));
         case "za":
            return [...products].sort((a, b) => b.title.localeCompare(a.title));
         case "new-items":
            // Ваша логика для сортировки по новизне, если необходимо
            return [...products];
         default:
            return [...products];
      }
   };

   const sortedProducts = applySorting(categories.products, subcategoriesSort);

   return (
      <section className={styles.section}>
         <div className={styles.container}>
            <h1 className={styles.title}>{subcategories.label}</h1>
            <div className={styles.filterWrap}>
               <Select
                  options={categories.subcategories}
                  defaultValue={subcategories}
                  onChange={handleChange}
                  placeholder="Select a category"
                  className={styles.filter}
               />
               <Select
                  options={options}
                  defaultValue={options[0]}
                  onChange={handleChangeSort}
                  placeholder="Select a sorting option"
                  className={styles.filter}
               />
            </div>
            <ul className={styles.productList}>
               {sortedProducts.map((product) => {
                  return (
                     <li key={product.id}>
                        <Link href="/product" className={styles.productLink}>
                           <Image
                              src={PlaceHolder}
                              alt={product.title}
                              className={styles.productImg}
                           />
                           <div className={styles.titleWrap}>
                              <h2 className={styles.title}>{product.title}</h2>
                              <div className={styles.priceWrap}>
                                 <p className={styles.price}>{product.price} грн.</p>
                                 <button type="button" className={styles.productBuyBtn}>
                                    <Image src={Shop} alt={product.title}></Image>
                                 </button>
                              </div>
                           </div>
                        </Link>
                     </li>
                  );
               })}
            </ul>
         </div>
      </section>
   );
}
