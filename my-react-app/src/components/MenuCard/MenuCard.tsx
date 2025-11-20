import styles from "./MenuCard.module.css";

type MenuCardProps = {
    image: string;
    title: string;
    description: string;
    price: string;
    onAdd: () => void;        // ← новий проп
};

export default function MenuCard({ image, title, description, price, onAdd }: MenuCardProps) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.footer}>
                <span className={styles.price}>{price}</span>
                <button className={styles.button} onClick={onAdd}>
                    Додати
                </button>
            </div>
        </div>
    );
}
