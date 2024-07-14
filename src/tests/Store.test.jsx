import { render, screen } from "@testing-library/react";
import Store from "../components/Store/Store";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";


describe("Store Component", () => {
    it("should render the store component and match snapshot", () => {
      const bagItemsKey = { mockData };
      const { container } = render(
        <MemoryRouter>
          <Store bagItemsKey={bagItemsKey} />
        </MemoryRouter>
      );
      expect(container).toMatchSnapshot();
    });
    
    it ("should show products", () => {
      render(
        <MemoryRouter>
          <Store bagItems={mockData}/>
        </MemoryRouter>
      );
      expect(screen.getByText(/car/i)).toBeInTheDocument();
    })
  
    
  });
  