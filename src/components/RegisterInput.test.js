/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle username typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterInput from "./RegisterInput";
import "@testing-library/jest-dom";

describe("RegisterInput component", () => {
  it("should handle username typing correctly", async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText("Username");

    // Action
    await act(() => userEvent.type(nameInput, "Dicoding Test"));

    // Assert
    expect(nameInput).toHaveValue("Dicoding Test");
  });

  it("should handle email typing correctly", async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText("Email");

    // Action
    await act(() => userEvent.type(emailInput, "test@dicoding.com"));

    // Assert
    expect(emailInput).toHaveValue("test@dicoding.com");
  });

  it("should handle password typing correctly", async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText("Password");

    // Action
    await act(() => userEvent.type(passwordInput, "test-password"));

    // Assert
    expect(passwordInput).toHaveValue("test-password");
  });

  it("should call register function when register button is clicked", async () => {
    // Arrange
    const mockregister = jest.fn();
    render(<RegisterInput register={mockregister} />);
    const nameInput = await screen.getByPlaceholderText("Username");
    await userEvent.type(nameInput, "Dicoding Test");
    const emailInput = await screen.getByPlaceholderText("Email");
    await userEvent.type(emailInput, "test@dicoding.com");
    const passwordInput = await screen.getByPlaceholderText("Password");
    await userEvent.type(passwordInput, "test-password");
    const registerButton = await screen.getByRole("button", {
      name: "Register",
    });

    // Action
    await act(() => userEvent.click(registerButton));

    // Assert
    expect(mockregister).toBeCalledWith({
      name: "Dicoding Test",
      email: "test@dicoding.com",
      password: "test-password",
    });
  });
});
