import { createContext, useContext, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../apollo-client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainNav from "components/layouts/MainNav/MainNav";
import { Character } from "@/gql/graphql";

interface IBasketContext {
  basketItems: Character[];
  setBasketItems: React.Dispatch<React.SetStateAction<Character[]>>;
}

export const BasketContext = createContext<IBasketContext>(null!);

export default function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient();


  const [basketItems, setBasketItems] = useState<Character[]>(
    [] as Character[]
  );

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        setBasketItems,
      }}
    >
      <ApolloProvider client={client}>
        <MainNav>
          <Component {...pageProps} />
        </MainNav>
      </ApolloProvider>
    </BasketContext.Provider>
  );
}
