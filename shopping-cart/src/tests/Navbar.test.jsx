import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("Navbar Component", () => {
    it("navlinks should direct to correct path", () => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      );
  
      const logoLink = screen.getByRole("link", { name: /fruits./i });
      expect(logoLink).toHaveAttribute("href", "/");
  
      const storeLink = screen.getByRole("link", { name: /store/i });
      expect(storeLink).toHaveAttribute("href", "/store");
  
      const bagLink = screen.getByRole("link", { name: /bag/i });
      expect(bagLink).toHaveAttribute("href", "/bag");
    });
  
    it("bag items should have correct number of products in them", () => {
      render(
        <MemoryRouter>
          <Navbar numberOfBagItems={4} />
        </MemoryRouter>
      );
  
      expect(screen.getByTestId("number-bag-items").textContent).toBe(
        `Bag (${4})`
      );
    });
  
    it("should render nav and match snapshot", () => {
      const { container } = render(
        <MemoryRouter>
          <Navbar numberOfBagItems={""} />
        </MemoryRouter>
      );
      expect(container).toMatchSnapshot();
    });
  });
  