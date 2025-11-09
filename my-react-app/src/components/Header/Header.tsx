import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import AuthModal from "../AuthModal/AuthModal";

export default function Header() {
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>Перекус</div>
                <nav className={styles.nav}>
                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                        Головна
                    </NavLink>
                    <NavLink to="/menu" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                        Меню
                    </NavLink>
                    <NavLink to="/delivery" className={({ isActive }) => (isActive ? styles.active : undefined)}>
                        Доставка
                    </NavLink>
                </nav>
                <button className={styles.authBtn} onClick={() => setIsAuthOpen(true)}>
                    Авторизація
                </button>
            </header>

            {isAuthOpen && <AuthModal onClose={() => setIsAuthOpen(false)} />}
        </>
    );
}
