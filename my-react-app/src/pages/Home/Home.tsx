import styles from "./Home.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <h1>Скуштуй найсоковитіші бургери</h1>
                <a className={styles.cta} href="/menu">Замовити зараз</a>
            </main>
            <Footer />
        </div>
    );
}
