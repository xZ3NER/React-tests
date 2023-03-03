import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

/* 12.- Running unit tests Tests */

describe("Greeting component", () => {
  test("should render Hello World!", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const expectedText = screen.getByText("Hello World", { exact: false });
    expect(expectedText).toBeInTheDocument();
  });

  test("should render good to see you if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const expectedText = screen.getByText("good to see you", { exact: false });
    expect(expectedText).toBeInTheDocument();
  });

  test("should render Changed! if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const expectedText = screen.getByText("Changed!");
    expect(expectedText).toBeInTheDocument();
  });

  test("should NOT render good to see you", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const expectedText = screen.queryByText("good to see you", { exact: false });
    expect(expectedText).toBeNull();
  });
});
