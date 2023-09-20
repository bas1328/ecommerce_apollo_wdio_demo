import { ApolloProvider } from "@apollo/client";
import createApolloClient from "../apollo-client";
import MainNav from "@/components/layouts/MainNav/MainNav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <MainNav>
        <Component {...pageProps} />
      </MainNav>
    </ApolloProvider>
  );
}
