import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";
import { BasketContext } from "@/pages/_app";
import { Character } from "@/gql/graphql";

const basketItems = [] as Character[];
const setBasketItems = jest.fn();

describe("Navbar", () => {
  it("renders a Navbar", () => {
    const screen = render(
      <BasketContext.Provider
        value={{
          basketItems,
          setBasketItems,
        }}
      >
        <Navbar />
      </BasketContext.Provider>
    );

    const heading = screen.getByRole("link", {
      name: /home/i,
    });

    expect(heading).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
});
