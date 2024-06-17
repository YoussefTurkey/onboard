"use client";
// importing main components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
// importing Scss Files for styling
import "./globals.scss";
// importing Google-Fonts
import { Ubuntu } from "next/font/google";
import Head from "next/head";
// importing custom hooks
import ThemeProvider from "@/app/elements/ThemeContext";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {

  return (
    <ThemeProvider>
      <html lang="en">
        <Head>
          <title>YouTurkey11 | Portfolio</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            name="description"
            content="My portfolio."
          />
          <meta name="keywords" content="portfolio, YouTurkey11, CV" />
          <meta name="author" content="Youssef Turkey" />
        </Head>
        <body
          className={`${ubuntu.className}`}
          suppressHydrationWarning={true}
        >
          <Header />
          <Sidebar />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}