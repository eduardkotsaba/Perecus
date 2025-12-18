import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

const renderHeader = () =>
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );

describe("Header", () => {
    test("показує логотип 'Перекус'", () => {
        renderHeader();
        expect(screen.getByText(/перекус/i)).toBeInTheDocument();
    });

    test("має посилання на всі сторінки", () => {
        renderHeader();
        expect(screen.getByText("Головна")).toBeInTheDocument();
        expect(screen.getByText("Меню")).toBeInTheDocument();
        expect(screen.getByText("Доставка")).toBeInTheDocument();
    });
});
