"use client";
// importing Next stuff
import Image from "next/image";
// improting Hoocks
import { useState } from "react";
// importing header style
import styles from "./header.module.scss";
// improting icons from React-icons
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
  const [colorPalete, setColorPalete] = useState(false);
  const [colorFocus, setColorFocus] = useState(false)

  return (
    <header className="header flex justify-between items-center mx-auto p-6 container">
      <div className="icon_colors flex items-center">
        <div
          onClick={() => {setColorPalete(!colorPalete); setColorFocus(!colorFocus)}}
          className={`${styles.div_icon} hover:bg-primary ${colorFocus ? 'bg-primary': 'bg-bgHover'} p-4 rounded-full transition-all cursor-pointer z-[1]`}
        >
          <IoColorPaletteOutline className={`${styles.icon} ${colorFocus ? 'text-white': 'text-secondary'}`} />
        </div>

        {colorPalete ? (
          <div className="bg-bgHover rounded-tr-full rounded-br-full flex items-center justify-between transition ml-[-25px] pl-[25px]">
            <div onClick={() => {setColorPalete(!colorPalete); setColorFocus(!colorFocus)}} className={`red_color p-[19px] hover:bg-txtHover hover:rounded-full cursor-pointer`}>
              <Image
                src={"/images/icons/red-color.svg"}
                width={15}
                height={15}
                alt="red-color"
                loading="lazy"
              />
            </div>

            <div onClick={() => {setColorPalete(!colorPalete); setColorFocus(!colorFocus)}} className={`blue_color p-[19px] hover:bg-txtHover hover:rounded-full cursor-pointer`}>
              <Image
                src={"/images/icons/blue-color.svg"}
                width={15}
                height={15}
                alt="blue-color"
                loading="lazy"
              />
            </div>

            <div onClick={() => {setColorPalete(!colorPalete); setColorFocus(!colorFocus)}} className={`yellow_color p-[19px] hover:bg-txtHover hover:rounded-full cursor-pointer`}>
              <Image
                src={"/images/icons/yellow-color.svg"}
                width={15}
                height={15}
                alt="yellow-color"
                loading="lazy"
              />
            </div>
          </div>
        ) : false}
      </div>

      <Link href={'/'} className={`${styles.logo} sm:hidden md:block cursor-pointer`}>
        <Image
          src={"/images/photos/logo-text2.png"}
          width={200}
          height={200}
          alt="logo"
          loading="lazy"
        />
      </Link>

      <div
        className={`${styles.div_icon} bg-bgHover p-4 rounded-full hover:bg-primary transition-all cursor-pointer`}
      >
        <IoMoonOutline className={`${styles.icon} text-secondary`} />
      </div>
    </header>
  );
};

export default Header;
