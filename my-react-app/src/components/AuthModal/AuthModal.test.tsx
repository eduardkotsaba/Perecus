import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AuthModal from "./AuthModal";

describe("AuthModal", () => {
    test("рендерить поля email і пароль", () => {
        const onClose = vi.fn();

        render(<AuthModal onClose={onClose} />);

        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/пароль/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /увійти/i })).toBeInTheDocument();
    });

    test("викликає onClose при натисканні 'Закрити'", () => {
        const onClose = vi.fn();

        render(<AuthModal onClose={onClose} />);

        fireEvent.click(screen.getByRole("button", { name: /закрити/i }));
        expect(onClose).toHaveBeenCalled();
    });
});
