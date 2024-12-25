// importing style
import styles from './btn.module.scss'
// importing React Components
import Link from 'next/link'
// importing SVG
import ArrowRight from "../../../../../public/images/icons/arrowR";

const Btn = ({txt}) => {
  return (
    <Link href={'/'} rel='preload' className={`${styles.btn} flex items-center w-fit border border-primary rounded-full mt-10 hover:bg-primary transition-all`}>
        <span className='pl-5 font-[600] text-[16px] text-secondary'>{txt}</span>
        <span className={`${styles.arrow} bg-primary px-5 py-4 rounded-full ml-3`}><ArrowRight /></span>
    </Link>
  )
}

export default Btn