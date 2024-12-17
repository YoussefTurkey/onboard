// importing react-scroll lib to smoothly scrolling
import { Link } from "react-scroll";
// importing header style
import styles from "./sidebar.module.scss";
// importing icons
import { CiHome } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { MdCardTravel } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa6";

const Sidebar = ({scrollToHeader}) => {
  return (
    <aside className={`${styles.sidebarScreen} w-1130`}>
      <div className="fixed top-[25%] lg:right-[9%] md:right-[7%] translate-x-[50%] z-[2]">
        <Link to="header" smooth={true} duration={500} className="my-5 block"  onClick={scrollToHeader}>
          <CiHome className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
        <Link to="bio" smooth={true} duration={500} className="my-5 block">
          <FaUser className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
        <Link to="skills" smooth={true} duration={500} className="my-5 block">
          <HiLightBulb className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
        <Link to="portfolio" smooth={true} duration={500} className="my-5 block">
          <MdCardTravel className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
        <Link to="contact" smooth={true} duration={500} className="my-5 block">
          <AiFillMessage className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
        <Link to="blogs" smooth={true} duration={500} className="my-5 block">
          <FaBookOpen className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
