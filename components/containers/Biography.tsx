import PersonalStatement from '@/markdown/personal-statement.mdx';

const Biography = () => {
  return (
    <section
      id='personal-statement-section'
      className='min-h-screen py-[57px] flex flex-col dark:bg-grid-small-white/[0.1] bg-grid-small-white/[0.2] relative border-t border-dashed border-neutral-500 shadow-inner dark:shadow-black'>
      {/* <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:from-black bg-gradient-to-b from-white via-transparent to-transparent'></div> */}
      {/* <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_15%,rgba(0,0,0,0)_70%,rgba(0,0,0,1)_90%)]' /> */}

      <h1 className='text-white z-20 w-full text-center underline decoration-4 underline-offset-[4px] pt-20 relative -top-1 decoration decoration-neutral-500 uppercase'>
        Personal Statement
      </h1>

      <div className='w-full h-full px-6 py-8 md:px-24 max-w-7xl mx-auto z-10'>
        <article className='prose prose-neutral dark:prose-invert prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white'>
          <PersonalStatement />
        </article>
      </div>
    </section>
  );
};

export default Biography;
