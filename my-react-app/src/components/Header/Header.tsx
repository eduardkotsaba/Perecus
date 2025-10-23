import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Перекус</div>
            <nav className={styles.nav}>
                <Link to="/">Головна</Link>
                <Link to="/menu">Меню</Link>
                <Link to="/delivery">Доставка</Link>
            </nav>
        </header>
    );
}
