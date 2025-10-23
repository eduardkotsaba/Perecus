
import styles from "./Delivery.module.css";
import Header from "../../components/Header/Header";

export default function Delivery() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1>Доставка</h1>
                    <p>
                        Ми доставляємо ваші улюблені бургери швидко та зручно 🚗💨
                    </p>

                    <section className={styles.info}>
                        <h2>Як оформити замовлення:</h2>
                        <ol>
                            <li>Оберіть страви у меню</li>
                            <li>Додайте їх у кошик</li>
                            <li>Вкажіть адресу доставки та номер телефону</li>
                            <li>Очікуйте дзвінок від кур’єра</li>
                        </ol>
                    </section>

                    <section className={styles.details}>
                        <h2>Умови доставки:</h2>
                        <ul>
                            <li>Доставка по місту — <strong>від 30 хвилин</strong></li>
                            <li>Безкоштовна доставка від <strong>400 ₴</strong></li>
                            <li>Мінімальне замовлення — <strong>150 ₴</strong></li>
                        </ul>
                    </section>

                    <section className={styles.mapSection}>
                        <h2>Ми знаходимось тут:</h2>
                        <div className={styles.mapContainer}>
                            <iframe
                                title="Мапа доставки"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.752960545947!2d30.52340007697075!3d50.45009967159013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5e3a94b4e1%3A0x5d5a1a40cf7dca1f!2z0JrQvtC80YHQutC40Lkg0J7RgtC10YXQvdC40Lkg0LrQvtC80YHQutC40Lkg0KHQvtCy0LXRgNGB0LjRjyDQutC-0YLQvtC70YzQvdGL0Lkg0L_RgNC-0LrQvtC70L7Qs9C40Y8!5e0!3m2!1suk!2sua!4v1715644123456!5m2!1suk!2sua"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Київ,+Україна"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.mapButton}
                        >
                            Показати маршрут
                        </a>
                    </section>
                </div>
            </main>

            <footer className={styles.footer}>
                © 2025 Перекус. Всі права захищені.
            </footer>
        </div>
    );
}
