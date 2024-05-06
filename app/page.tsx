import Navbar from '@/components/Navbar';
import About from '@/components/containers/About';

export default function Home() {
  return (
    <main className='min-h-screen relative'>
      <Navbar />
      <About />
    </main>
  );
}
