const SkillsPage = () => {
  const link =
    'italic font-bold text-blue-500 underline decoration-transparent hover:decoration-blue-500 underline-offset-4 decoration-4 transition-colors duration-100 cursor-pointer';

  const highlight = 'text-gray-700 dark:text-gray-300 font-semibold';

  return (
    <main
      id='skills-section'
      className='min-h-screen pt-[57px] flex flex-col dark:bg-grid-small-white/[0.1] bg-dot-black/[0.3] relative border-t border-dashed border-neutral-500 shadow-inner dark:shadow-black'>
      {/* <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:from-black bg-gradient-to-b from-white via-transparent to-transparent'></div> */}
      {/* <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_15%,rgba(0,0,0,0)_70%,rgba(0,0,0,1)_90%)]' /> */}

      <h1 className='z-20 w-full text-center underline decoration-4 underline-offset-[4px] pt-20 relative -top-1 decoration decoration-neutral-500 uppercase'>
        Skills
      </h1>
      <section className=' py-32 w-full h-full flex flex-col items-center justify-between gap-40 px-24 max-w-7xl mx-auto z-10'>
        skill
      </section>
    </main>
  );
};

export default SkillsPage;
