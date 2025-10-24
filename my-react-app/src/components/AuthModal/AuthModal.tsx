
import styles from "./AuthModal.module.css";

interface AuthModalProps {
    onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Вхід</h2>

                <form className={styles.form}>
                    <label>Email</label>
                    <input type="email" placeholder="Введіть ваш email" required />

                    <label>Пароль</label>
                    <input type="password" placeholder="Введіть пароль" required />

                    <button type="submit" className={styles.loginBtn}>
                        Увійти
                    </button>

                    <button
                        type="button"
                        className={styles.closeBtn}
                        onClick={onClose}
                    >
                        Закрити
                    </button>
                </form>
            </div>
        </div>
    );
}
