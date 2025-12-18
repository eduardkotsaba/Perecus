import styles from "./Menu.module.css";
import MenuCard from "../../components/MenuCard/MenuCard";
import burgerImage from "../../assets/burger.png";
import friesImage from "../../assets/fries.png";

import { useMenu, sendOrder } from "../../hooks/useApi";
import type { MenuItem } from "../../types";

const imageById: Record<number, string> = {
    1: burgerImage,
    2: friesImage,
    3: burgerImage,
    4: burgerImage,
    5: burgerImage,
    6: friesImage,
    7: burgerImage,
    8: burgerImage
};

export default function Menu() {
    const { menu, loading, error } = useMenu();

    const handleOrder = async (item: MenuItem) => {
        try {
            await sendOrder({
                items: [item.id],
                total: item.price
            });
            alert("Замовлення відправлено!");
        } catch {
            alert("Помилка при відправці замовлення");
        }
    };

    if (loading) {
        return <p className={styles.loading}>Завантаження...</p>;
    }

    if (error) {
        return <p className={styles.error}>{error}</p>;
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1>Наше меню</h1>

                <div className={styles.grid}>
                    {menu.map(item => (
                        <MenuCard
                            key={item.id}
                            image={imageById[item.id] ?? burgerImage}
                            title={item.title}
                            description={item.description}
                            price={`${item.price} ₴`}
                            onAdd={() => handleOrder(item)}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
