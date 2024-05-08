import Navbar from '@/components/Navbar';
import Projects from '@/components/containers/Projects';

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen pt-[57px] flex flex-col'>
        <Projects />
      </main>
    </>
  );
};

export default ProjectsPage;
