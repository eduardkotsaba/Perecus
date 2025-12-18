import { useEffect, useState } from "react";
import type { MenuItem, OrderPayload } from "../types";

const MENU_URL = "https://mocki.io/v1/130d62f3-12a4-4fa3-ad22-de99c730393f";
const ORDER_URL = "https://jsonplaceholder.typicode.com/posts";

export function useMenu() {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadMenu() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(MENU_URL);
                if (!res.ok) {
                    throw new Error("Помилка завантаження меню");
                }

                const data: MenuItem[] = await res.json();
                setMenu(data);
            } catch (e) {
                setError("Не вдалося завантажити меню");
            } finally {
                setLoading(false);
            }
        }

        loadMenu();
    }, []);

    return { menu, loading, error };
}

export async function sendOrder(order: OrderPayload) {
    const res = await fetch(ORDER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ...order,
            createdAt: new Date().toISOString()
        })
    });

    if (!res.ok) {
        throw new Error("Помилка відправки замовлення");
    }

    return res.json();
}
