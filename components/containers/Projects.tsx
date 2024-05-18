import Project from '@/components/containers/Project';

const Projects = () => {
  return (
    <main className='min-h-screen pt-[57px] flex flex-col dark:bg-dot-white/[0.1] bg-dot-black/[0.3] relative'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>

      <h1 className='z-20 w-full text-center underline decoration-4 underline-offset-[4px] pt-20 relative -top-1 decoration decoration-neutral-500 uppercase border-t border-dashed border-neutral-500'>
        Projects
      </h1>
      <section className=' py-32 w-full h-full flex flex-col items-center justify-between gap-40 px-24 max-w-7xl mx-auto z-10'>
        <Project
          videoSrc='/Study Express Optimized5.webm'
          heading='Study Express Academy'
          description="With our straightforward resources, designed to adapt your level of understanding. You'll gain access to
          practice tests, question banks, video tutorials, and exam strategies to help you prepare for test day."
        />

        <Project
          reverse
          videoSrc='/Study Express Optimized5.webm'
          heading='Pluto AI Image Generator'
          description="With our straightforward resources, designed to adapt your level of understanding. You'll gain access to
          practice tests, question banks, video tutorials, and exam strategies to help you prepare for test day."
        />

        <Project
          videoSrc='/Study Express Optimized5.webm'
          heading='Username Availability Checker'
          description="With our straightforward resources, designed to adapt your level of understanding. You'll gain access to
          practice tests, question banks, video tutorials, and exam strategies to help you prepare for test day."
        />

        <Project
          reverse
          videoSrc='/Study Express Optimized5.webm'
          heading='E-Learning Platform API'
          description="With our straightforward resources, designed to adapt your level of understanding. You'll gain access to
          practice tests, question banks, video tutorials, and exam strategies to help you prepare for test day."
        />

        <Project
          videoSrc='/Study Express Optimized5.webm'
          heading='Opulent Fashion Designing Landing Page'
          description="With our straightforward resources, designed to adapt your level of understanding. You'll gain access to
          practice tests, question banks, video tutorials, and exam strategies to help you prepare for test day."
        />

        <Project
          reverse
          videoSrc='/Study Express Optimized5.webm'
          heading='Landing Page for a Dynamic Online Gallery'
          description="With our straightforward resources, designed to adapt your level of understanding. You'll gain access to
          practice tests, question banks, video tutorials, and exam strategies to help you prepare for test day."
        />
      </section>
    </main>
  );
};

export default Projects;
