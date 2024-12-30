// importing react-scroll lib to smoothly scrolling
import { Link } from "react-scroll";
// importing header style
import styles from "./smallSidebar.module.scss";
// importing icons 
import { CiHome } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import { MdCardTravel } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { FaBookOpen } from 'react-icons/fa6';
// import redux
import { useSelector } from 'react-redux';

const SmallSidebar = ({scrollToHeader}) => {

    const isSmallSidebarVisible = useSelector((state) => state.toggle.isSmallSidebarVisible);

  return(
    <>
        {isSmallSidebarVisible && (
            <aside className={`${styles.sidebarSmallScreen} lg:hidden`}>
                <div>
                    <Link rel='preload' to="header" smooth={true} duration={500} className="my-5 block" onClick={scrollToHeader}>
                        <CiHome className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
                    </Link>
                    <Link rel='preload' to="bio" smooth={true} duration={500} className="my-5 block">
                        <FaUser className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
                    </Link>
                    <Link rel='preload' to="skills" smooth={true} duration={500} className="my-5 block">
                        <HiLightBulb className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
                    </Link>
                    <Link rel='preload' to="portfolio" smooth={true} duration={500} className="my-5 block">
                        <MdCardTravel className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
                    </Link>
                    <Link rel='preload' to="contact" smooth={true} duration={500} className="my-5 block">
                        <AiFillMessage className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
                    </Link>
                    <Link rel='preload' to="blogs" smooth={true} duration={500} className="my-5 block">
                        <FaBookOpen className={`bg-bgHover p-3 rounded-full hover:bg-primary hover:text-white text-secondary text-[55px] transition-all cursor-pointer`}/>
                    </Link>
                </div>
            </aside>
        )}
    </>
  );
};

export default SmallSidebar;
