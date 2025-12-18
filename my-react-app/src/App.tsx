import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Delivery from "./pages/Delivery/Delivery";
import "./styles/globals.css";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

function NotFound() {
    return (
        <div style={{ padding: 40, textAlign: "center" }}>
            <h1>Сторінку не знайдено</h1>
            <a href="/">На головну</a>
        </div>
    );
}
