import dynamic from 'next/dynamic';
const Loading = dynamic(() => import('@/app/components/mainComponents/loading/page'));

// importing components
const Bio = dynamic(() => import('../../components/sectionComponents/bio/page'), {
    loading: () => <Loading />,
  });
const Blogs = dynamic(() => import('../../components/sectionComponents/blogs/page'), {
    loading: () => <Loading />,
});
const Contact = dynamic(() => import('../../components/sectionComponents/contact/page'), {
    loading: () => <Loading />,
});
const Landing = dynamic(() => import('../../components/sectionComponents/landing/page'), {
    loading: () => <Loading />,
});
const Portfolio = dynamic(() => import('../../components/sectionComponents/portfolio/page'), {
    loading: () => <Loading />,
});
const Skills = dynamic(() => import('../../components/sectionComponents/skills/page'), {
    loading: () => <Loading />,
});
const Testimonials = dynamic(() => import('../../components/sectionComponents/testimonials/page'), {
    loading: () => <Loading />,
});

export default function LandingPage() {
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
