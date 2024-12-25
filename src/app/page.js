// importing components
import Bio from "./components/sectionComponents/bio/page";
import Blogs from "./components/sectionComponents/blogs/page";
import Contact from "./components/sectionComponents/contact/page";
import Landing from "./components/sectionComponents/landing/page";
import Portfolio from "./components/sectionComponents/portfolio/page";
import Skills from "./components/sectionComponents/skills/page";
import Testimonials from "./components/sectionComponents/testimonials/page";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <section>
        <Landing />
        <Bio />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Blogs />
      </section>
    </main>
  );
}
