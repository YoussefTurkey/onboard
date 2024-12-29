'use client'
// importing react components
import Image from "next/image";
import { useState } from "react";
// importing style
import styles from "./clientsNo.module.scss";
// importing components
import Btn from "@/app/components/mainComponents/buttons/Btn";
// importing react-icons
import { FaPlus } from "react-icons/fa";

const ClientsNumbers = () => {

  // making counter
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1)
    }

  return (
    <section className={`${styles.clientsNo} md:pl-[30px] pl-[30px]`}>
        <h3 className='text-[26px] font-[700] text-primary'>{count > 0 ? count + `+`: 0}</h3>
        <p className='text-[18px]'>Happy Clients</p>

        <div className={`${styles.imgs} flex my-5`}>
            <Image src='/images/photos/client01.svg' fetchPriority='low' width='50' height="50" alt='client01' loading='lazy' />
            <Image src='/images/photos/client02.svg' fetchPriority='low' width='50' height="50" alt='client02' loading='lazy' className="ml-[-1.3%]" />
            <Image src='/images/photos/client03.svg' fetchPriority='low' width='50' height="50" alt='client03' loading='lazy' className="ml-[-1.3%]" />
            <Image src='/images/photos/client04.svg' fetchPriority='low' width='50' height="50" alt='client04' loading='lazy' className="ml-[-1.3%]" />
            {/* <Image src='/images/photos/client05.svg' fetchPriority='low' width='50' height="50" alt='client05' loading='lazy' className="ml-[-1.3%]" /> */}
            <button className="bg-bgHover w-[65px] h-[65px] rounded-full border border-bgColor ml-[-1.3%]" onClick={increment}><FaPlus className="text-txtColor mx-auto text-2xl" /></button>
        </div>

        <Btn txt={'Portfolio'} />
    </section>
  )
}

export default ClientsNumbers