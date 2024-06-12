import { render } from "@testing-library/react";
import App from "../App";
import Home from "../components/HomePage/Home";
import Navbar from "../components/Navbar/Navbar";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("App Component", () => {
  it("renders the app component", () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("renders the navbar component", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar numberOfBagItems={""} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("renders the home component", () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
