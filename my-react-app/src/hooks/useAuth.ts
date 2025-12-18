import { useState } from "react";

const LOGIN_URL = "https://reqres.in/api/login";

export function useAuth() {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("auth_token")
    );
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function login(email: string, password: string): Promise<boolean> {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch(LOGIN_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (!res.ok) {
                throw new Error("Помилка авторизації");
            }

            const data: { token: string } = await res.json();
            setToken(data.token);
            localStorage.setItem("auth_token", data.token);

            return true;
        } catch (e) {
            setError("Невірний email або пароль");
            return false;
        } finally {
            setLoading(false);
        }
    }

    function logout() {
        setToken(null);
        localStorage.removeItem("auth_token");
    }

    const isAuth = Boolean(token);

    return {
        login,
        logout,
        loading,
        error,
        isAuth
    };
}
