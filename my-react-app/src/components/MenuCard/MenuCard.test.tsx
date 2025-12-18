import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import MenuCard from "./MenuCard";

describe("MenuCard", () => {
    test("рендерить назву, опис і ціну", () => {
        render(
            <MenuCard
                image="/burger.png"
                title="Чізбургер"
                description="Соковита котлета"
                price="99 ₴"
                onAdd={() => {}}
            />
        );

        expect(screen.getByText("Чізбургер")).toBeInTheDocument();
        expect(screen.getByText("Соковита котлета")).toBeInTheDocument();
        expect(screen.getByText("99 ₴")).toBeInTheDocument();
    });

    test("викликає onAdd при кліку на кнопку", () => {
        const handleAdd = vi.fn();

        render(
            <MenuCard
                image="/burger.png"
                title="Чізбургер"
                description="Соковита котлета"
                price="99 ₴"
                onAdd={handleAdd}
            />
        );

        fireEvent.click(screen.getByRole("button", { name: /додати/i }));
        expect(handleAdd).toHaveBeenCalledTimes(1);
    });
});
