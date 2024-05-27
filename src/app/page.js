"use client";
// importing style
import styles from "./main.module.scss";
// importing Next components
import Image from "next/image";
import Link from "next/link";
// importing icons
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <main>
      <section className={`${styles.landing} container mx-auto`}>
        <Image
          src={"/images/photos/logo-img.png"}
          width={1000}
          height={1000}
          alt="logo"
          loading="lazy"
        />

        <div className={`${styles.clients}`}>
          <h4>110+</h4>
          <p>Happy Clients</p>
          <div className={`${styles.img_grouped}`}>
            <Image
              src={""}
              width={50}
              height={50}
              alt="img-grouped-1"
              loading="lazy"
            />
            <Image
              src={""}
              width={50}
              height={50}
              alt="img-grouped-1"
              loading="lazy"
            />
            <Image
              src={""}
              width={50}
              height={50}
              alt="img-grouped-1"
              loading="lazy"
            />
            <Image
              src={""}
              width={50}
              height={50}
              alt="img-grouped-1"
              loading="lazy"
            />
            <FaPlus />
          </div>
          <Link href={"/"} role="button">
            Portfolio{" "}
            <span>
              <IoIosArrowForward />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
