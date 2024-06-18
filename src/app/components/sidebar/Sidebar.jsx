// importing next component
import Link from "next/link";
// importing header style
import styles from "./sidebar.module.scss";
// importing icons
import { CiHome } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { MdCardTravel } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <aside className={`${styles.sidebarScreen} w-1130`}>
      <div className="fixed top-[25%] right-[11.5%] translate-x-[50%]">
        <Link href={"/"} className="my-5 block">
          <CiHome className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
        <Link href={"#bio"} className="my-5 block">
          <FaUser className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
        <Link href={"#skills"} className="my-5 block">
          <HiLightBulb className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
        <Link href={"#projects"} className="my-5 block">
          <MdCardTravel className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
        <Link href={"#contact"} className="my-5 block">
          <AiFillMessage className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
        <Link href={"#blog"} className="my-5 block">
          <FaBookOpen className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
