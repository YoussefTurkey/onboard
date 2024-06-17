'use client'
// importing style
import styles from "./landPage.module.scss";
// importing SVG components
import MainImage from "../../../../../public/images/photos/main-image";
// importing theme Redux
import { useSelector } from 'react-redux';

const LandPage = () => {

  // const {darkMode} = useTheme();
  const darkMode = useSelector((state) => state.theme.darkMode);


  return (
    <section className={styles.landing}>
      <MainImage darkMode={darkMode} />
    </section>
  )
}

export default LandPage