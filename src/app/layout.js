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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='gtag' strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Head>
        <title>Joel Noyce</title>
        <meta
          name="Joel Noyce's Portfolio"
          content="Welcome to Joel Noyce's portfolio website. Here you will find any information you need about his latest projects, work experience and character."
          key="desc"
        />
        <meta property="og:title" content="Portfolio for Joel Noyce." />
        <meta
          property="og:description"
          content="A professional bio for Joel Noyce."
        />
        <meta property="og:image" content="/me.webp" />
      </Head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
