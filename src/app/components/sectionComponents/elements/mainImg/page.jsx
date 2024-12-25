'use client'
// importing React Components 
import Image from "next/image";
// importing style
import styles from "./landPage.module.scss";
// importing SVG components
import MainImage from "../../../../../../public/images/photos/main-image";
// importing theme Redux
import { useSelector } from 'react-redux';

const LandPage = () => {

  // const {darkMode} = useTheme();
  const darkMode = useSelector((state) => state.theme.darkMode);


  return (
    <section className={styles.landing}>
      <div>
        <MainImage darkMode={darkMode} className={styles.circle} />
        <Image src='/images/photos/person.webp' fetchPriority='high' width='300' height='300' alt='person' loading='lazy' className={styles.img} />
      </div>
    </section>
  )
}

export default LandPage