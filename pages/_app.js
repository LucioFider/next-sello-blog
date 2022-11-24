import "../styles/globals.css";
import { Inconsolata } from "@next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  // weight: "400",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={inconsolata.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
