import { render, screen } from "@testing-library/react";
import Card, { Cards } from "../components/card/card";

describe("Card", () => {
  it("renders card component", () => {
    render(<Card text="Welcome to the home page" />);
    const cardElement = screen.getByText("Welcome to the home page");
    expect(cardElement).toBeInTheDocument();
  });

  test("renders card components", () => {
    render(<Card text="Welcome to the home page" />);
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toContainHTML("h1");
  });

  test("renders card component using getByRole", () => {
    render(<Card text="Welcome to the home page" />);
    const cardElement = screen.getByRole("heading");
    expect(cardElement).toBeInTheDocument();
  });
});

describe("Cards", () => {
  test("renders cards component", () => {
    render(<Cards text="Welcome to the home page" />);
    const cardElement = screen.getAllByText("Welcome to the home page");
    expect(cardElement.length).toBe(2);
  });

  test("renders cards components", () => {
    render(<Cards text="Welcome to the home page" />);
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toContainHTML("h1");
  });

  test("renders cards component using getByRole", () => {
    render(<Cards text="Welcome to the home page" />);
    const cardElement = screen.getAllByRole("heading");
    expect(cardElement.length).toBe(2);
  });
});
