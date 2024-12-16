// importing components
import Bio from "./(pages)/bio/page";
import Contact from "./(pages)/contact/page";
import Landing from "./(pages)/landing/page";
import Portfolio from "./(pages)/portfolio/page";
import Skills from "./(pages)/skills/page";
import Testimonials from "./(pages)/testimonials/page";

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
      </section>
    </main>
  );
}
