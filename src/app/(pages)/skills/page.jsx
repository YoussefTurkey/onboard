// importing React Components
import Image from 'next/image'
// importing styles
import styles from './skills.module.scss'
// importing components
import Title from '@/app/components/title/title'
// importing SVG
import HTML5 from '../../../../public/images/icons/tools/HTML5'
import CSS3 from '../../../../public/images/icons/tools/CSS3'
import JavaScript from '../../../../public/images/icons/tools/JavaScript'
import TypeScript from '../../../../public/images/icons/tools/TypeScript'
import VueJS from '../../../../public/images/icons/tools/VueJS'
import ReactJS from '../../../../public/images/icons/tools/ReactJS'
import NextJS from '../../../../public/images/icons/tools/NextJS'
import Bootstrap from '../../../../public/images/icons/tools/Bootstrap'
import TailwindCSS from '../../../../public/images/icons/tools/TailwindCSS'
import QJuery from '../../../../public/images/icons/tools/QJuery'
import Redux from '../../../../public/images/icons/tools/Redux'
import Git from '../../../../public/images/icons/tools/Git'
import GitHub from '../../../../public/images/icons/tools/GitHub'
import Yarn from '../../../../public/images/icons/tools/yarn'
import Npm from '../../../../public/images/icons/tools/npm'
import Photoshop from '../../../../public/images/icons/tools/Photoshop'
import Illustrator from '../../../../public/images/icons/tools/Illustrator'
import CorelDRAW from '../../../../public/images/icons/tools/CorelDRAW'

// section-data
const data = {
    sectionData: {
      subTitle: 'What I Have ?',
      title: 'Tools & Skills',
      tools: [
        {id: 1,icon: <HTML5 />, name: 'HTML5'},
        {id: 2,icon: <CSS3 />, name: 'CSS3'},
        {id: 3,icon: <JavaScript />, name: 'JavaScript'},
        {id: 4,icon: <TypeScript />, name: 'TypeScript'},
        {id: 5,icon: <VueJS />, name: 'VueJS'},
        {id: 6,icon: <ReactJS />, name: 'ReactJS'},
        {id: 7,icon: <NextJS />, name: 'NextJS'},
        {id: 8,icon: <Bootstrap />, name: 'Bootstrap CSS'},
        {id: 9,icon: <TailwindCSS />, name: 'Tailwind CSS'},
        {id: 10,icon: <QJuery />, name: 'jQuery'},
        {id: 11,icon: <Redux />, name: 'Redux'},
        {id: 12,icon: <Git />, name: 'Git'},
        {id: 13,icon: <GitHub />, name: 'GitHub'},
        {id: 14,icon: <Yarn />, name: 'Yarn'},
        {id: 15,icon: <Npm />, name: 'NPM'},
        {id: 16,icon: <Photoshop />, name: 'Photoshop'},
        {id: 17,icon: <Illustrator />, name: 'Illustrator'},
        {id: 18,icon: <CorelDRAW />, name: 'CorelDRAW'},
      ]
    }
  }

  const tools = data.sectionData.tools;

const Skills = () => {
  return (
    <section className='mx-auto container' id='skills'>
        <Title data={data} />

        <div className={`${styles.tools} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[10px] sm:gap-[20px] md:gap-[30px] my-10 justify-items-center`}>
            {
                tools.map( skill => {
                    return(
                        <div key={skill.id} className={`${styles.tool} flex flex-col items-center gap-[15px] border border-bgHover rounded-lg p-[40px] w-[250px]`}>
                            {skill.icon}
                            <p className='font-[500] text-[18px] text-secondary'>{skill.name}</p>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Skills