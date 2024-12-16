"use client";
// importing Next stuff
import Image from "next/image";
import Link from "next/link";
// improting Hoocks
import { useState, useEffect, useRef } from "react";
// importing theme Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "@/app/redux/themeSlice";
// importing header style
import styles from "./header.module.scss";
// improting icons from React-icons
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
// importing image logo
import LogoSVG from "../../../../public/images/icons/Logo";

const Header = ({headerRef}) => {
  // color-palate
  const [colorPalete, setColorPalete] = useState(false);
  const [colorFocus, setColorFocus] = useState(false);

  // Reference for color palette container
  const paletteRef = useRef(null); 
  
  // const { darkMode, toggleDarkMode } = useTheme();
  const dispatch = useDispatch();
  const darkMode = useSelector( state => state.theme.darkMode)

  // Close palette on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (paletteRef.current && !paletteRef.current.contains(event.target)) {
        setColorPalete(false);
        setColorFocus(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`${styles.header} flex justify-between sm:items-start md:items-center mx-auto p-6 container`}
      ref={headerRef} id='header'
    >
      <div className={`${styles.icon_colors} flex items-center`} ref={paletteRef}>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setColorPalete(!colorPalete);
            setColorFocus(!colorFocus);
          }}
          className={`${styles.div_icon} p-4 rounded-full transition-all cursor-pointer z-[10]  
          ${colorFocus ? 'bg-primary' : 'hover:bg-primary bg-bgHover'}`}
        >
          <IoColorPaletteOutline
            className={`${styles.icon} ${
              colorFocus ? "text-white" : "text-secondary"
            }`}
          />
        </div>

        {colorPalete ? (
          <div
            className={`bg-bgHover sm:rounded-bl-full md:rounded-bl-none md:rounded-tr-full sm:rounded-br-full flex items-center justify-between sm:mt-[-25px] sm:pt-[25px] md:mt-0 md:pt-0 md:ml-[-25px] md:pl-[40px] ${styles.palete}`}
          >
            <div
              onClick={() => {
                setColorPalete(!colorPalete);
                setColorFocus(!colorFocus);
              }}
              className={`red_color p-[19px] hover:bg-txtHover hover:rounded-full cursor-pointer`}
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
              className={`blue_color p-[19px] hover:bg-txtHover hover:rounded-full cursor-pointer`}
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
              className={`yellow_color p-[19px] hover:bg-txtHover hover:rounded-full cursor-pointer`}
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
        <LogoSVG darkMode={darkMode} />
      </Link>

      <div
        onClick={() => dispatch(toggleDarkMode())}
        className={`${styles.div_icon} p-4 rounded-full transition-all cursor-pointer
        hover:bg-primary bg-bgHover`}
      >
        {darkMode ? (
          <IoSunny className={`${styles.icon} text-secondary`} />
          ) : (
          <IoMoonOutline className={`${styles.icon} text-secondary`} />
        )}
      </div>
    </header>
  );
};

export default Header;
