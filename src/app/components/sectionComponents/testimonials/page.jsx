// importing style
import styles from "./testimonials.module.scss";
// importing Components
import Title from "@/app/components/mainComponents/title/title";
import FullRating from "@/app/components/mainComponents/rating/fullRating/page";
import FourRating from "@/app/components/mainComponents/rating/fourRating/page";
import Image from "next/image";

// section-data
const data = {
  sectionData: {
    subTitle: "My Clients Opinions",
    title: "Testimonials",
    card: [
      {
        id: 1,
        message:
          "“ I recently had the pleasure of working with Youssef, and I have to say, his skills as a graphic designer are truly impressive. From start to finish, Youssef... ”",
        img: "/images/photos/AhmedSaad.webp",
        name: "Ahmed Saad",
        postion: "CEO, Queue Pie",
        stars: <FullRating />
      },
      {
        id: 2,
        message:
          "“ I recently had the pleasure of working with Turkey, a talented Front End Developer. From the very beginning, Turkey impressed me with their coding skills and... ”",
        img: "/images/photos/HalaSalam.webp",
        name: "Hala Salam",
        postion: "Entrepreneur",
        stars: <FourRating />
      },
    ],
  },
};

const message = data.sectionData.card

const Testimonials = () => {
  return (
    <section className={`mx-auto container my-10`}>
      <Title data={data} />

      <div className={`grid grid-col-1 lg:grid-cols-2 gap-5 my-5 mx-auto w-[80%]`}>
        {
            message.map(msg => {
                return(
                    <div key={msg.id} className={`${styles.msg} flex flex-col items-center gap-y-3 bg-bgHover rounded-2xl p-[40px]`}>
                        <div className='flex items-center justify-end gap-2 w-[100%]'>{msg.stars}</div>
                        <p className='italic my-5 text-secondary'>{msg.message}</p>
                        <div className={`${styles.person} flex items-start justify-start gap-x-3 w-[100%]`}>
                            <Image src={msg.img} fetchPriority='low' width='50' height='50' alt={msg.name} loading='lazy' />
                            <div className={`${styles.info}`}>
                                <h4 className='text-secondary font-[500]'>{msg.name}</h4>
                                <p className='text-secondary'>{msg.postion}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </section>
  );
};

export default Testimonials;
