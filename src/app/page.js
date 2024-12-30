// importing components
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('./(pages)/landingPage/page'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main className='min-h-screen'>
      <section>
        <LandingPage />
      </section>
    </main>
  );
}
