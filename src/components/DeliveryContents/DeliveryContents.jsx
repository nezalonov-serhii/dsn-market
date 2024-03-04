import React, { useState } from "react";

import styles from "./deliveryContents.module.css";

const DeliveryContentsInput = ({ contents, setContents }) => {
   const [localContents, setLocalContents] = useState(contents);

   // Обработчик изменения значения в поле содержания доставки
   const handleContentChange = (index, value) => {
      const newContents = [...localContents];
      newContents[index] = value;
      setLocalContents(newContents);
      setContents(newContents); // Обновляем состояние в родительском компоненте
   };

   // Обработчик добавления нового поля содержания доставки
   const handleAddContent = () => {
      setLocalContents([...localContents, ""]);
      setContents([...localContents, ""]); // Обновляем состояние в родительском компоненте
   };

   // Обработчик удаления поля содержания доставки
   const handleRemoveContent = (index) => {
      const newContents = [...localContents];
      newContents.splice(index, 1);
      setLocalContents(newContents);
      setContents(newContents); // Обновляем состояние в родительском компоненте
   };

   return (
      <div>
         <label className={styles.title}>Зміст Доставки:</label>
         <ul className={styles.list}>
            {localContents.map((content, index) => (
               <li key={index} className={styles.item}>
                  <div className={styles.wrapInput}>
                     <span>{index + 1}.</span>
                     <textarea
                        type="text"
                        value={content}
                        onChange={(e) => handleContentChange(index, e.target.value)}
                        className={styles.textarea}
                     />
                  </div>
                  <button
                     type="button"
                     onClick={() => handleRemoveContent(index)}
                     className={styles.remove}
                  >
                     Видалити
                  </button>
               </li>
            ))}
         </ul>
         <button type="button" onClick={handleAddContent} className={styles.add}>
            Додати
         </button>
      </div>
   );
};

export default DeliveryContentsInput;
