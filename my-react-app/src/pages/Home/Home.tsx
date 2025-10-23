import Header from "../../components/Header/Header";
import "../../styles/Footer.css";
import styles from "./Home.module.css";

import burgerImage from "../../assets/burger.png";
import friesImage from "../../assets/fries.png";

export default function Home() {
    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.main}>
                <div className={styles.hero}>
                    <div className={styles.text}>
                        <h1>Скуштуй найсоковитіші бургери міста!</h1>
                        <p>Швидка доставка, свіжі інгредієнти та неперевершений смак.</p>
                        <a href="/menu" className={styles.cta}>
                            Замовити зараз
                        </a>
                    </div>

                    <div className={styles.images}>
                        <img src={friesImage} alt="Картопля" className={styles.fries} />
                        <img src={burgerImage} alt="Бургер" className={styles.burger} />
                    </div>
                </div>
            </main>

            <footer className="footer">
                © 2025 Перекус. Всі права захищені.
            </footer>

        </div>
    );
}
