import styles from "./about-us.module.css";

export default function AboutUs() {
   return (
      <section className={styles.section}>
         <div className={styles.container}>
            <h2 className={styles.title}>Про нас</h2>
            <p className={styles.text}>
               Будь-який власник автомобіля періодично стикається з необхідністю купівлі
               автозапчастин. Деякі відправляються в магазин запчастин, хтось віддає перевагу
               авторинкам, інші довіряють сервісній станції, але ті, хто економить свій час і хоче
               отримати максимальний вибір за мінімальних цін - обирає інтернет-магазин DSNmarket.
               Це зручно, швидко та практично. Ви можете купити запчастини не виходячи з дому та
               оформити доставку в будь-яку область та місто або отримати товар особисто від кур'єра
               в місті Харків.
            </p>
         </div>
      </section>
   );
}
