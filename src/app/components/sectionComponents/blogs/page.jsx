// importing react components
import Link from 'next/link';
import Image from 'next/image';
// importing style scss file
import styles from './blog.module.scss'
// importing Components
import Title from "@/app/components/mainComponents/title/title";
import Btn from "@/app/components/mainComponents/buttons/Btn";
// importing from react-icons
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";


// section-data
const data = {
    sectionData: {
      subTitle: "My Recent Posts",
      title: 'Blogs',
      post: [
        {id: 1,src: '/images/photos/post_1.webp', title: 'Graphic Design Trends', date: '13 May 2024', category:'Graphic Desing', to: '/'},
        {id: 2,src: '/images/photos/post_2.webp', title: 'Web Development', date: '10 May 2024', category:'Web Development', to: '/'},
        {id: 3,src: '/images/photos/post_3.webp', title: 'Visual Identity Branding', date: '08 May 2024', category:'Graphic Desing', to: '/', style: 'expand'},
      ]
    }
}

const posts = data.sectionData.post;

const Blogs = () => {
  return(
    <>
        <section className={`${styles.blogs} container mx-auto my-40 flex flex-col items-center`} id='blogs'>
            <Title data={data} />

            <div className={`${styles.blogs} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] sm:gap-[10px] md:gap-[30px] my-10 md:mx-[85px] justify-items-center`}>
            {
                posts.map( post => {
                    return(
                        <Link rel='preload' href={post.to ? post.to : ''} key={post.id} className={`${styles.blog} ${post.style ? styles.expand : ''} flex flex-col items-start bg-bgHover border border-bgHover hover:border-primary rounded-3xl w-[100%] my-3 sm:my-0 transition-all`}>
                            <Image src={post.src} alt={post.title} loading='lazy' width='300' height='300' className='w-[100%] h-[150px] sm:h-[300px] rounded-tr-3xl rounded-tl-3xl border-b-[8px] border-primary object-cover' fetchPriority='low' />
                            <div className="p-5">
                                <h4 className='text-primary text-[24px] font-[900] py-2'>{post.title}</h4>
                                <p className='text-secondary text-[18px] font-[400] flex items-center py-2'> <span className='text-primary text-[18px] pr-3'><FaRegCalendarDays /></span>{post.date}</p>
                                <p className='text-secondary text-[18px] font-[400] flex items-center py-2'> <span className='text-primary text-[18px] pr-3'><IoMdPricetag /></span>{post.category}</p>
                            </div>
                        </Link>
                    )
                })
            }
            </div>

            <Btn txt={'View All Blogs'}/>

        </section> 
    </>    
  );
};

export default Blogs;
