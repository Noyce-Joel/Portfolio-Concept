import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio: Joel Noyce",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Joel Noyce</title>
        <meta
          name="Concept Portfolio"
          content="Welcome to a portfolio concept."
          key="desc"
        />
        <meta property="og:title" content="Portfolio Concept" />
        <meta property="og:description" content="A portfolio concept for a project." />
      </Head>
     
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>

    </>
  );
}
