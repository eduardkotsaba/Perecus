import styles from "./Delivery.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Delivery() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <h1>Доставка та оплата</h1>
                <ul className={styles.list}>
                    <li>Швидка доставка по місту</li>
                    <li>Оплата картою або готівкою</li>
                    <li>Замовлення від 300 ₴ — безкоштовна доставка</li>
                </ul>
            </main>
            <Footer />
        </div>
    );
}
