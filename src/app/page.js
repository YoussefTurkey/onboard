"use client";
import Footer from "./components/footer/Footer";
// importing main components
import Header from "./components/header/Header";
// improting Hoocks
import { useState } from "react";

export default function Home() {

  // dark-mode
  const [darkMode, setDarkMode] = useState('dark');
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={ darkMode ? "light" : 'dark'}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Footer />
    </main>
  );
}
