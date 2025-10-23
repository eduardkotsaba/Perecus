import  { useState } from "react";
import styles from "./Header.module.css";
import AuthModal from "../AuthModal/AuthModal";

export default function Header() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const openAuth = () => setIsAuthOpen(true);
    const closeAuth = () => setIsAuthOpen(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>Перекус</div>
                <nav className={styles.nav}>
                    <a href="/">Головна</a>
                    <a href="/menu">Меню</a>
                    <a href="/delivery">Доставка</a>
                </nav>
                <button className={styles.authBtn} onClick={openAuth}>
                    Авторизація
                </button>
            </header>

            {isAuthOpen && <AuthModal onClose={closeAuth} />}
        </>
    );
}
