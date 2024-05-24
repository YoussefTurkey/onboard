"use client";
// importing Next stuff
import Image from "next/image";
// improting Hoocks
import { useState } from "react";
// importing header style
import styles from "./header.module.scss";
// improting icons from React-icons
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import Link from "next/link";

const Header = ({ darkMode, toggleDarkMode }) => {
  // color-palate
  const [colorPalete, setColorPalete] = useState(false);
  const [colorFocus, setColorFocus] = useState(false);
  // change-logo
  const [logo, setLogo] = useState("");

  return (
    <header
      className={`${styles.header} flex justify-between sm:items-start md:items-center mx-auto p-6 container `}
    >
      <div className={`${styles.icon_colors} flex items-center`}>
        <div
          onClick={() => {
            setColorPalete(!colorPalete);
            setColorFocus(!colorFocus);
          }}
          className={`${
            styles.div_icon
          } hover:bg-primary dark:hover:bg-darkSecondary ${
            colorFocus ? "bg-primary dark:bg-darkSecondary" : "bg-bgHover"
          } p-4 rounded-full transition-all cursor-pointer z-[1]`}
        >
          <IoColorPaletteOutline
            className={`${styles.icon} ${
              colorFocus ? "text-white" : "text-secondary"
            }`}
          />
        </div>

        {colorPalete ? (
          <div
            className={`bg-bgHover sm:rounded-bl-full md:rounded-bl-none md:rounded-tr-full sm:rounded-br-full flex items-center justify-between sm:mt-[-25px] sm:pt-[25px] md:mt-0 md:pt-0 md:ml-[-25px] md:pl-[25px] ${styles.palete}`}
          >
            <div
              onClick={() => {
                setColorPalete(!colorPalete);
                setColorFocus(!colorFocus);
              }}
              className={`red_color p-[19px] hover:bg-txtHover dark:hover:bg-darkTxtHover hover:rounded-full cursor-pointer`}
            >
              <Image
                src={"/images/icons/red-color.svg"}
                width={15}
                height={15}
                alt="red-color"
                loading="lazy"
              />
            </div>

            <div
              onClick={() => {
                setColorPalete(!colorPalete);
                setColorFocus(!colorFocus);
              }}
              className={`blue_color p-[19px] hover:bg-txtHover dark:hover:bg-darkTxtHover hover:rounded-full cursor-pointer`}
            >
              <Image
                src={"/images/icons/blue-color.svg"}
                width={15}
                height={15}
                alt="blue-color"
                loading="lazy"
              />
            </div>

            <div
              onClick={() => {
                setColorPalete(!colorPalete);
                setColorFocus(!colorFocus);
              }}
              className={`yellow_color p-[19px] hover:bg-txtHover dark:hover:bg-darkTxtHover hover:rounded-full cursor-pointer`}
            >
              <Image
                src={"/images/icons/yellow-color.svg"}
                width={15}
                height={15}
                alt="yellow-color"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          false
        )}
      </div>

      <Link
        href={"/"}
        className={`${styles.logo} sm:hidden md:block cursor-pointer`}
      >
        <Image
          src={
            logo
              ? "/images/photos/logo-text.png"
              : "/images/photos/logo-text2.png"
          }
          width={200}
          height={200}
          alt="logo"
          loading="lazy"
        />
      </Link>

      <div
        onClick={() => {
          toggleDarkMode();
          setLogo(!logo);
        }}
        className={`${styles.div_icon} bg-bgHover p-4 rounded-full hover:bg-primary dark:hover:bg-darkSecondary transition-all cursor-pointer`}
      >
        {darkMode ? (
          <IoMoonOutline className={`${styles.icon} text-secondary`} />
          ) : (
          <IoSunny className={`${styles.icon} text-secondary`} />
        )}
      </div>
    </header>
  );
};

export default Header;
