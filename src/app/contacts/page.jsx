import styles from "./contacts.module.css";

export default function Home() {
   return (
      <main>
         <section className={styles.section}>
            <div className={styles.container}>
               <h2 className={styles.title}>Контактна інформація</h2>

               <h3 className={styles.subTitle}>Контактні номери:</h3>
               <ul className={styles.tellList}>
                  <li>
                     <a href="tel:+380979995086">+38(097) 999-50-86 (viber, telegram)</a>
                  </li>
                  <li>
                     <a href="tel:+380979995086">+38(097) 999-50-86 (viber, telegram)</a>
                  </li>
               </ul>

               <a href="mailto:dsn.auto.market@gmail.com" className={styles.mail}>
                  <span className={styles.mailWrap}>E-mail</span>: dsn.auto.market@gmail.com
               </a>

               <h3 className={styles.subTitle}>Графік роботи: </h3>
               <ul className={styles.schedule}>
                  <li>пн-пт 9-00 - 19-00</li>
                  <li>сб 10-00 - 18-00 </li>
                  <li>нд вихідний</li>
               </ul>
            </div>
         </section>
      </main>
   );
}
