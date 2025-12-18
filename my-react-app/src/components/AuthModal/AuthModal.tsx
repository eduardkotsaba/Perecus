import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./AuthModal.module.css";
import { useAuth } from "../../hooks/useAuth";

type AuthModalProps = {
    onClose: () => void;
};

export default function AuthModal({ onClose }: AuthModalProps) {
    const { login, loading, error } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const success = await login(email, password);
        if (success) {
            alert("Успішний вхід");
            onClose();
        }
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Вхід</h2>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>
                        Email
                        <input
                            className={styles.input}
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Введіть ваш email"
                            required
                        />
                    </label>

                    <label className={styles.label}>
                        Пароль
                        <input
                            className={styles.input}
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Введіть пароль"
                            required
                        />
                    </label>

                    {error && <p className={styles.error}>{error}</p>}

                    <button
                        type="submit"
                        className={styles.loginBtn}
                        disabled={loading}
                    >
                        {loading ? "Вхід..." : "Увійти"}
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
