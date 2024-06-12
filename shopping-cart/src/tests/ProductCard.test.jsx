import { render, screen, userEvent } from "@testing-library/react";
import ProductCard from "../components/Store/ProductCard";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

const mockData = [
  {
    id: 1,
    quantity: 1,
    price: 2400,
    name: "car1",
    image: "",
  },
  {
    id: 2,
    quantity: 3,
    price: 4000,
    name: "car2",
    image: "",
  },
];

describe("Product Card Component", () => {
  it("should add product to bag and update number of items in the bag", async () => {
    let itemCount;
    let quantity;

    beforeEach(() => {
      itemCount = 0;
      quantity = 1;
      vi.clearAllMocks();
    });

    const mockHandleAddToCart = vi.fn(() => {
      itemCount += quantity;
    });

    const user = userEvent.setup();
    const items = mockData;

    render(
      <MemoryRouter>
        <ProductCard product={items[0]} handleClick={mockHandleAddToCart} />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: /bag/i }));
    await user.click(screen.getByRole("button", { name: /bag/i }));
    expect(mockHandleAddToCart).toBeCalledTimes(2);
    expect(itemCount).toBe(2);
  });
});
