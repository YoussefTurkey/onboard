// importing style
import styles from "./bio.module.scss";
// importing SVG
import Linkedin from "../../../../../public/images/icons/linkedin";
import Whatsapp from "../../../../../public/images/icons/whatsapp";
import X from "../../../../../public/images/icons/x";
import Facebook from "../../../../../public/images/icons/facebook";
// importing components
import Btn from "@/app/components/mainComponents/buttons/Btn";
import Title from "@/app/components/mainComponents/title/title";
// importing React Components
import Link from "next/link";

// section-data
const data = {
  sectionData: {
    subTitle: 'Get to Know Me',
    title: 'Biography',
    content: [
      "I am ",
      { type: "span", className: "text-primary font-[700]", text: "Youssef Turkey" },
      ", Very passionate about ",
      { type: "span", className: "font-[500]", text: "Front-End Development" },
      " and I am trying to learn everything new about modern technology in this field. I am trying to connect this field with ",
      { type: "span", className: "font-[500]", text: "Graphic Designing" },
      " to give an artistic sense and be distinctive."
    ]
  }
}

const Bio = () => {
  return (
    <section className={`${styles.bio} mx-auto container flex flex-col items-center my-40`} id='bio'>
      <Title data={data} />
      <div className={`${styles.socials} flex items-center`}>
        <Link href={"/"} rel='preload'>
          <Linkedin />
        </Link>
        <Link href={"/"} rel='preload'>
          <Whatsapp />
        </Link>
        <Link href={"/"} rel='preload'>
          <X />
        </Link>
        <Link href={"/"} rel='preload'>
          <Facebook />
        </Link>
      </div>

      <Btn txt={"View My Resume"} />
    </section>
  );
};

export default Bio;
