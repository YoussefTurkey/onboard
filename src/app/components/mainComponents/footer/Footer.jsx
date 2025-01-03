// importing next components
import Image from 'next/image'
// importing style file
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-[#2b2a2a] lg:w-[100%] flex flex-col items-center justify-center py-10 rounded-3xl mx-auto w-[80%]`}>
        <Image fetchPriority='high' src={'/images/photos/logo-text.png'} width={200} height={200} alt='logo' loading='lazy' />
        <p className='text-secondary text-[20px] pt-5'>2024 © YouTurkey11. Powerd by OnBoard.</p>
    </footer>
  )
}

export default Footer