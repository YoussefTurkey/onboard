"use client";
// importing style
import styles from "./main.module.scss";
// importing Next components
import Image from "next/image";
// importing components
import MainImage from "../../public/images/photos/main-image";

export default function Home({logo}) {
  return (
    <main>
      <section className={`${styles.landing} container mx-auto`}>
        <MainImage className={styles.circle} logo={logo} />
        <Image src={'/images/photos/person.png'} className={styles.person} width={500} height={500} alt="person" loading="lazy"/>
      </section>
    </main>
  );
}
