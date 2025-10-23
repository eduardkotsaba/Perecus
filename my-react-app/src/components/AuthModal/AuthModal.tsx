import styles from "./AuthModal.module.css";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function AuthModal({ open, onClose }: Props) {
    if (!open) return null;

    return (
        <div className={styles.backdrop} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>Вхід</h2>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Email
                        <input type="email" required />
                    </label>
                    <label>
                        Пароль
                        <input type="password" required />
                    </label>
                    <button type="submit" className={styles.submit}>Увійти</button>
                </form>
                <button className={styles.close} onClick={onClose}>Закрити</button>
            </div>
        </div>
    );
}
