import { render, screen } from "@testing-library/react";
import Home from "../components/HomePage/Home";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("Home Component", () => {
  it("renders the home component and match snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it("shop now link should link to the store", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const shopNowLink = screen.getByRole("link", { name: /shop now/i });
    expect(shopNowLink).toHaveAttribute("href", "/store");
  });

  it("contains the title", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
  });
});
