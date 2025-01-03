// importing react components
import Link from 'next/link';
// importing styles scss file
import styles from './contact.module.scss'
// importing Components
import Title from "@/app/components/mainComponents/title/title";
import Btn from "@/app/components/mainComponents/buttons/Btn";
// importing react-icons
import { BiPhoneCall } from "react-icons/bi";
import { LuMail } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
// importing SVG
import Linkedin from "../../../../../public/images/icons/linkedin";
import Whatsapp from "../../../../../public/images/icons/whatsapp";
import X from "../../../../../public/images/icons/x";
import Facebook from "../../../../../public/images/icons/facebook";

// section-data
const data = {
    sectionData: {
      subTitle: "Let's Talk!",
      title: 'Contacts',
      cards: [
        {id: 1,icon: <BiPhoneCall />, name: 'Call Me', info: '(+20) 1273451052', to:'//wa.me/01273451052'},
        {id: 2,icon: <LuMail />, name: 'Email Me', info: 'youssef.turkey11@gmail.com', to:'mailto:youssef.turkey11@gmail.com'},
        {id: 3,icon: <LuMapPin />, name: 'Visit Office', info: 'Alexandria, Egypt', style: 'expand'}
      ]
    }
}

const cards = data.sectionData.cards;

const Contact = () => {
  return(
    <>
        <section className={`${styles.contact} mx-auto container my-40`} id='contact'>
            <Title data={data} />

            <div className={`${styles.cards} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] sm:gap-[20px] md:gap-[30px]  my-10 md:mx-[85px] justify-items-center`}>
            {
                cards.map( skill => {
                    return(
                        <Link rel='preload' href={skill.to ? skill.to : ''} target='_blank' key={skill.id} className={`${styles.card} ${skill.style ? styles.expand : ''} flex flex-col items-center gap-[15px] border border-bgHover hover:border-primary rounded-lg p-[40px] w-[80%] md:w-[100%] transition-all`}>
                            <span className='bg-primary p-5 text-[40px] rounded-lg text-white'>{skill.icon}</span>
                            <p className='font-[500] text-[25px] text-color'>{skill.name}</p>
                            <p className='font-[500] text-[18px] text-secondary'>{skill.info}</p>
                        </Link>
                    )
                })
            }
            </div>

            <div className='mx-auto flex flex-col items-center'>
                <div className={`${styles.socials} flex items-center gap-5`}>
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

                <Btn txt={"Message Me"} />
            </div>
        </section>
    </>
  );
};

export default Contact;
