import { render } from "@testing-library/react";
import ProductItem from "./ProductCard";
import "@testing-library/jest-dom";
import { Character } from "@/gql/graphql";
import { BasketContext } from "@/pages/_app";

const basketItems = [] as Character[];
const setBasketItems = jest.fn();

describe("ProductItem", () => {
  it("renders a ProductItem", () => {
    const screen = render(
      <BasketContext.Provider
        value={{
          basketItems,
          setBasketItems,
        }}
      >
        <ProductItem
          name={"my item"}
          image={"https://rickandmortyapi.com/api/character/avatar/152.jpeg"}
          id={"1"}
        />
      </BasketContext.Provider>
    );

    const heading = screen.getByRole("heading", {
      name: /my item/i,
    });

    expect(heading).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
});
