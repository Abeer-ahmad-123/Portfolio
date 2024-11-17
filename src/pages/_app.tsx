import "@/assets/css/globals.css";
import "@/assets/css/styles.css";

import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider autoHideDuration={2000}>
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}
