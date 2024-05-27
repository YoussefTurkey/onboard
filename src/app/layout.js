"use client";
// improting Hoocks
import { useState, useEffect } from "react";
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
  // Initialize darkMode state based on localStorage or default to true
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return true; // Default to dark mode
  });

  // Effect to update localStorage when darkMode changes
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
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
        className={`${ubuntu.className} ${darkMode ? "dark" : "light"}`}
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
