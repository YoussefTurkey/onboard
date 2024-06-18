// importing React Components
import Image from "next/image";
import Link from "next/link";
// importing styles
import styles from "./portfolio.module.scss";
// importing components
import Title from "@/app/components/title/title";
// importing SVG
import Pricetags from "../../../../public/images/icons/pricetags";
import View from "../../../../public/images/icons/tools/View";
import GitHub2 from "../../../../public/images/icons/tools/GitHub2";
import Behance from "../../../../public/images/icons/tools/Behance";
import Btn from "@/app/components/buttons/Btn";

// section-data
const data = {
  sectionData: {
    subTitle: "My Latest Projects",
    title: "Portfolio",
    card: [
      {
        id: 1,
        style: "bg-[#7FBFFF]",
        img: "/images/photos/JamRaise.png",
        subTitle: "Graphic Design",
        title: "JamRaise",
        code: "",
        view: "https://www.behance.net/gallery/170398183/JAMRaise",
        // icon: <Behance />,
      },
      {
        id: 2,
        style: "bg-[#515151]",
        img: "/images/photos/Spiderman.png",
        subTitle: "Web Development",
        title: "Spiderman Website",
        code: "https://github.com/YoussefTurkey/Spider-Man",
        view: "https://youssefturkey.github.io/Spider-Man/",
        icon: <GitHub2 />,
      },
      {
        id: 3,
        style: "bg-[#3E5463]",
        img: "/images/photos/Justin.png",
        subTitle: "Graphic Design",
        title: "Coach Youssef Justin",
        code: "",
        view: "https://www.behance.net/gallery/125058207/Coach",
        // icon: <Behance />,
      },
    ],
  },
};

const card = data.sectionData.card;

const Portfolio = () => {
  return (
    <section className={`${styles.portfolio} mx-auto container flex flex-col items-center my-40`} id="portfolio">
      <Title data={data} />
      
      {card.map((work) => {
        return (
          <div
            key={work.id}
            className={`${styles.cards} flex flex-col items-center gap-10 my-5`}
          >
            <div
              className={`${styles.card} ${work.style} w-[100%] lg:w-1130 rounded-2xl flex flex-col p-5`}
            >
              <div className={`${styles.txt}`}>
                <p className="text-[18px] text-white flex items-center">
                  <Pricetags /> <span className="pl-2">{work.subTitle}</span>
                </p>
                <h3 className="text-[22px] font-[500] text-white">
                  {work.title}
                </h3>
              </div>
              <Image
                src={work.img}
                width={200}
                height={200}
                alt={work.title}
                loading="lazy"
              />
              {work.code || work.view ? (
                <div
                  className={`${styles.source} flex justify-end items-center`}
                >
                  <Link href={work.view ? work.view : ""} target="_blank">
                    <View />
                  </Link>
                  <Link href={work.code ? work.code : ""} target="_blank">{work.icon}</Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}

      <Btn txt={'View All Projects'} />
    </section>
  );
};

export default Portfolio;
