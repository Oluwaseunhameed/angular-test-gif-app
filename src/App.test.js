import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
describe("on load page", () => {
  test("LOGO", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(<App />);
    const logo = getByText(/Gifs-Search/i);
    const placeholder = getByPlaceholderText(/search gifs[\.+]/i);
    const SearchIcon = getByText(/Search for a gif/i);
    const button = getByTestId(/Search/);
    expect(logo).toBeInTheDocument();
    expect(placeholder).toBeInTheDocument();
    expect(SearchIcon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

describe("user can type in search input", () => {
  test("user can type into search", () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId(/searchinput/i);
    fireEvent.change(input, { target: { value: "a" } });
    expect(input.value).toBe("a");
  });

  test("user can see search options", () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    const input = getByTestId(/searchinput/i);
    const button = getByTestId(/Search/);
    fireEvent.change(input, { target: { value: "a" } });
    fireEvent.click(button);
    expect(input.value).toBe("a");
    setTimeout(() => {
      expect(getAllByTestId(/gifs/i)).toBeInTheDocument();
    }, 400);
  });
});
