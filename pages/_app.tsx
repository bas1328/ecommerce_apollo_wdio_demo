import MainNav from "@/components/layouts/MainNav/MainNav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainNav>
      <Component {...pageProps} />
    </MainNav>
  );
}
