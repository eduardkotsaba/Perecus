import Header from "../../components/Header/Header";
import MenuCard from "../../components/MenuCard/MenuCard";
import burgerImage from "../../assets/burger.png";
import friesImage from "../../assets/fries.png";
import styles from "./Menu.module.css";
import "../../styles/Footer.css";


export default function Menu() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <h1>Наше меню</h1>
                <div className={styles.grid}>
                    <MenuCard
                        image={burgerImage}
                        title="Чізбургер"
                        description="Соковита котлета, сир та фірмовий соус"
                        price="99 ₴"
                    />
                    <MenuCard
                        image={friesImage}
                        title="Картопля фрі"
                        description="Золотиста, хрумка та ароматна"
                        price="59 ₴"
                    />
                    <MenuCard
                        image={burgerImage}
                        title="Дабл бургер"
                        description="Подвійна котлета та багато сиру"
                        price="149 ₴"
                    />
                    <MenuCard
                        image={burgerImage}
                        title="Бургер BBQ"
                        description="З копченою котлетою і соусом BBQ"
                        price="129 ₴"
                    />
                    <MenuCard
                        image={burgerImage}
                        title="Класичний бургер"
                        description="Простий, але неперевершений смак"
                        price="89 ₴"
                    />
                    <MenuCard
                        image={friesImage}
                        title="Картопля по-селянськи"
                        description="Запашна, з травами та спеціями"
                        price="69 ₴"
                    />
                    <MenuCard
                        image={burgerImage}
                        title="Бекон бургер"
                        description="З хрустким беконом та сиром чеддер"
                        price="139 ₴"
                     />
                    <MenuCard
                        image={burgerImage}
                        title="Бургер з ананасом"
                        description="Екзотичний смак і ніжність"
                         price="119 ₴"
                    />
                </div>
            </main>

            <footer className="footer">
                © 2025 Перекус. Всі права захищені.
            </footer>

        </div>
    );
}
