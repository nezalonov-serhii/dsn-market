"use client";
import fetch from "cross-fetch";
import React, { useState } from "react";
import ImageUpload from "../../../serves/ImageUpload";
import Select from "react-select";

import styles from "./admin.module.css";
import DeliveryContentsInput from "../../components/DeliveryContents/DeliveryContents";
import Loader from "../../components/Loader/Loader";

const URL = process.env.NEXT_PUBLIC_API_URL;

const ProductForm = () => {
   const [title, setTitle] = useState("");
   const [load, setLoad] = useState(false);
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [contentsDelivery, setContentsDelivery] = useState([]);
   const [images, setImages] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState(null);
   const [selectedSubcategories, setSelectedSubcategories] = useState([]);

   const handleImageUpload = (uploadedFiles) => {
      setImages(uploadedFiles);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      // Добавьте проверку наличия загруженных изображений
      if (images.length === 0) {
         alert("Please upload at least one image.");
         return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("category", selectedCategory.value);
      formData.append("subcategories", selectedSubcategories.map((sub) => sub.value).join(","));
      formData.append("description", description);
      formData.append("price", price);
      formData.append("contentsDelivery", JSON.stringify(contentsDelivery));

      images.forEach((image, index) => {
         formData.append("images", image);
      });

      try {
         setLoad(true);
         const response = await fetch(`${URL}api/products`, {
            method: "POST",
            body: formData,
         });

         if (response.ok) {
            const data = await response.json();
            console.log("Product created:", data);
         } else {
            console.error("Failed to create product");
         }
      } catch (error) {
         console.error("Error during product creation:", error);
      } finally {
         setLoad(false);
      }

      // Остальной код обработки формы
   };

   const handleCategoryChange = (selectedOption) => {
      setSelectedCategory(selectedOption);
   };

   const handleSubcategoriesChange = (selectedOptions) => {
      setSelectedSubcategories(selectedOptions);
   };

   return (
      <section className={styles.section}>
         <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
               <div className={styles.titleWrap}>
                  <div className={styles.inputWrap}>
                     <label className={styles.title}>Назва:</label>
                     <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className={styles.input}
                     />
                  </div>

                  <div className={styles.inputWrap}>
                     <label className={styles.title}>Ціна:</label>
                     <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className={styles.input}
                     />
                  </div>
               </div>

               <div className={styles.categoryDescrWrap}>
                  <div className={styles.categoryWrap}>
                     <div className={styles.category}>
                        <label className={styles.title}>Категорія:</label>
                        <Select
                           value={selectedCategory}
                           onChange={handleCategoryChange}
                           options={[{ value: "video-recorders", label: "Відеореєстратори" }]}
                           isMulti={false}
                           required
                        />
                     </div>

                     <div className={styles.category}>
                        <label className={styles.title}>Підкатегорії:</label>
                        <Select
                           value={selectedSubcategories}
                           onChange={handleSubcategoriesChange}
                           options={[
                              { value: "video", label: "Відео" },
                              { value: "audio", label: "Аудио" },
                           ]}
                           isMulti={true}
                           required
                        />
                     </div>
                  </div>

                  <div className={styles.descriptionWrap}>
                     <label className={styles.title}>Опис:</label>
                     <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className={styles.textarea}
                     />
                  </div>
               </div>

               <DeliveryContentsInput
                  contents={contentsDelivery}
                  setContents={setContentsDelivery}
               />

               <div>
                  <label className={styles.title}>Зображення:</label>
                  <ImageUpload onUpload={handleImageUpload} />
               </div>

               <button type="submit" className={styles.submit} disabled={load}>
                  {!load && <>Create Product</>}
                  {load && <Loader size={26} color={"#fff"} />}
               </button>
            </form>
         </div>
      </section>
   );
};

export default ProductForm;
