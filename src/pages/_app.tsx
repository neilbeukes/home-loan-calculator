import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LoanProvider from "./contexts/loanContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoanProvider>
      <Component {...pageProps} />
    </LoanProvider>
  );
}
