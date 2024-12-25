"use client";
import { useRef } from "react";
// importing main components
// import Header from "./components/header/Header";
import Header from "./components/mainComponents/header/Header";
import Footer from "./components/mainComponents/footer/Footer";
import Sidebar from "./components/mainComponents/sidebar/Sidebar";
// importing Scss Files for styling
import "./globals.scss";
// importing Google-Fonts
import { Ubuntu } from "next/font/google";
// importing React components
import Head from "next/head";
// importing theme Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
  
  const headerRef = useRef(null);

  const scrollToHeader = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Provider store={store}>
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
          className={`${ubuntu.className} container mx-auto`}
          suppressHydrationWarning={true}
        >
          <Header headerRef={headerRef} />
          <Sidebar scrollToHeader={scrollToHeader} />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}