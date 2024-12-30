"use client";
import { useRef } from "react";
// importing components
import dynamic from 'next/dynamic';
// importing main components
const Header = dynamic(() => import('./components/mainComponents/header/Header'));
const Footer = dynamic(() => import('./components/mainComponents/footer/Footer'));
const Sidebar = dynamic(() => import('./components/mainComponents/sidebar/Sidebar'));
const SmallSidebar = dynamic(() => import('./components/mainComponents/smallSidebar/page'));

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
          <SmallSidebar scrollToHeader={scrollToHeader} />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}