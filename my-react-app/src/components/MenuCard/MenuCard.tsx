import styles from "./MenuCard.module.css";

type Props = {
    title: string;
    price: string;
    image?: string;
};

export default function MenuCard({ title, price, image }: Props) {
    return (
        <div className={styles.card}>
            {image && <img src={image} alt={title} className={styles.image} />}
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.row}>
                <span className={styles.price}>{price}</span>
                <button className={styles.button}>Додати</button>
            </div>
        </div>
    );
}
