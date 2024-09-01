import Navbar from '@/components/Navbar';
import About from '@/components/containers/About';
import Projects from '@/components/containers/Projects';
import SkillsPage from '@/components/containers/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen pt-[57px] flex flex-col'>
        <About />
        <Projects />
        <SkillsPage />
      </main>
    </>
  );
}
