// importing style
import styles from "./landPage.module.scss";
// importing SVG components
import MainImage from "../../../../../public/images/photos/main-image";
// importing custome hooks
import { useTheme } from "@/app/elements/ThemeContext";

const LandPage = () => {

  // const {darkMode} = useTheme();

  return (
    // <section className={styles.landing}>
    //   <MainImage darkMode={darkMode} />
    // </section>
    <section className={styles.landing}>
      <MainImage />
    </section>
  )
}

export default LandPage