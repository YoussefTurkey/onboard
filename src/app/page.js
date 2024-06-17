// importing components
import Bio from "./(pages)/bio/page";
import Landing from "./(pages)/landing/page";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <section>
        <Landing />
        <Bio />
      </section>
    </main>
  );
}
