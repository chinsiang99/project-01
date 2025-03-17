// import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { UserContext } from "./UserContext";
import Message from "./Message";

describe("Message Component", () => {
    it("renders correctly with context", () => {
        // Mock the context value
        const mockContextValue = { name: "Alice", message: "Welcome to the app!" };

        render(
            <UserContext.Provider value={mockContextValue}>
                <Message />
            </UserContext.Provider>
        );

        // Verify the rendered content
        expect(screen.getByText("Alice, Welcome to the app!")).toBeInTheDocument();
    });

    it("throws an error when context is not provided", () => {
        // Use Vitest's error assertion
        const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
        expect(() => render(<Message />)).toThrowError(
            "User context must be used within UserProvider"
        );

        // Restore original console.error
        consoleErrorSpy.mockRestore();
    });
});
