"use client";
// improting Hoocks
import { useState } from "react";
// importing main components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
// importing Scss Files for styling
import "./globals.scss";
// importing Google-Fonts
import { Ubuntu } from "next/font/google";
import Head from "next/head";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});


export default function RootLayout({ children }) {
  // dark-mode
  const [darkMode, setDarkMode] = useState("dark");
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="en">
      <Head>
        <title>YouTurkey11 | Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This is a global description for my Next.js application."
        />
        <meta name="keywords" content="Next.js, Global Metadata, SEO" />
        <meta name="author" content="Youssef Turkey" />
      </Head>
      <body
        className={`${ubuntu.className} ${darkMode ? "light" : "dark"}`}
        suppressHydrationWarning={true}
      >
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
