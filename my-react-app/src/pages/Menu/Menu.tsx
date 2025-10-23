import styles from "./Menu.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MenuCard from "../../components/MenuCard/MenuCard";

export default function Menu() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <h1>Меню</h1>
                <div className={styles.grid}>
                    <MenuCard title="Чізбургер" price="99 ₴" />
                    <MenuCard title="ДаБургер" price="149 ₴" />
                    <MenuCard title="Картопля фрі" price="59 ₴" />
                </div>
            </main>
            <Footer />
        </div>
    );
}
