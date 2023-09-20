import { render } from "@testing-library/react";
import ProductItem from "./ProductCard";
import "@testing-library/jest-dom";

// TODO: create separete stub system for mocks, not to use 'real' data
describe("ProductItem", () => {
  it("renders a ProductItem", () => {
    const screen = render(
      <ProductItem
        name={"my item"}
        image={"https://rickandmortyapi.com/api/character/avatar/152.jpeg"}
        id={"1"}
      />
    );

    const heading = screen.getByRole("heading", {
      name: /my item/i,
    });

    expect(heading).toBeInTheDocument();
    // expect(screen).toMatchSnapshot();
  });
});
