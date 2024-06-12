import { render, screen } from "@testing-library/react";
import Bag from "../components/Bag/Bag";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("Bag Component", () => {
  it("display products in the bag", () => {});

  it("should increment quantity by 1 ", () => {});

  it("should decrement quantity by 1 ", () => {
    // Should delete item from bag when quantity = 0
  });

  it("should delete item from bag", () => {});

  it("checkout should redirect to home page", () => {
    render(
        <MemoryRouter>
          <Bag />
        </MemoryRouter>
      );
  
      const checkOutLink = screen.getByRole("link", { name: /checkout/i });
      expect(checkOutLink).toHaveAttribute("href", "/");
  });
  
  
});
