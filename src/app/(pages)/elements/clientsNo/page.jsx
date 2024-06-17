// importing style
import Image from "next/image";
import Link from "next/link";
// importing style
import styles from "./clientsNo.module.scss";
// importing components
import Btn from "@/app/components/buttons/Btn";

const ClientsNumbers = () => {
  return (
    <section className={`${styles.clientsNo} pl-[200px]`}>
        <h3 className='text-[26px] font-[700] text-primary'>110+</h3>
        <p className='text-[18px]'>Happy Clients</p>

        <div className={`${styles.imgs} flex my-5`}>
            <Image src='/images/photos/client01.svg' width='50' height="50" alt='client01' loading='lazy' />
            <Image src='/images/photos/client02.svg' width='50' height="50" alt='client02' loading='lazy' className="ml-[-1.3%]" />
            <Image src='/images/photos/client03.svg' width='50' height="50" alt='client03' loading='lazy' className="ml-[-1.3%]" />
            <Image src='/images/photos/client04.svg' width='50' height="50" alt='client04' loading='lazy' className="ml-[-1.3%]" />
            <Image src='/images/photos/client05.svg' width='50' height="50" alt='client05' loading='lazy' className="ml-[-1.3%]" />
        </div>

        <Btn txt={'Portfolio'} />
    </section>
  )
}

export default ClientsNumbers