const sectionContentStyle = 'w-full h-full flex flex-col items-center justify-center gap-10 z-[1]';
const ctaButton = 'capitalize border px-8 py-4 rounded-2xl items-center justify-center font-bold block';
const highlight: string | undefined = 'italic text-blue-500 font-bold';

const HeroSection = () => {
  return (
    <div>
      <section className='w-full bg-dot-black/[0.2] max-w-7xl mx-auto flex flex-row justify-between items-center min-h-screen px-24'>
        {/* <div className='inset-0 absolute w-full h-full bg-[linear-gradient(0deg,_rgba(52,50,44,0.7539390756302521)_0%,_rgba(46,100,97,0)_30%,_rgba(34,193,195,0)_100%)]' /> */}
        <div className='h-full w-full min-w-screen z-0 absolute pointer-events-none left-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className={sectionContentStyle}>
          <h1 className='text-5xl leading-[1] font-extrabold  pb-3 min-w-[580px] font-display flex flex-col gap-5'>
            <span className='text-lg font-primary font-light flex '>Hi, I’m</span>
            <span className='flex flex-row whitespace-nowrap'>Sulaiman Agara👋</span>
          </h1>
          <div className='leading-8 text-sm font-medium text-neutral-600 dark:text-neutral-400'>
            <p>
              I’m passionate about coding and designing. I started programming as a hobby when I was 14, and now it’s my
              lifestyle. Currently, I develop full-stack websites using <span className={highlight}>Next.js</span> and{' '}
              <span className={highlight}>Express.js</span>.
            </p>

            {/* <p>
              I like to stay ahead of industry trends to ensure that my projects are not just functional, but also
              cutting-edge and modern. Like Chess Grandmaster Hans Niemann said, “The chess speaks for itself,” so I’m
              going to let my work do the talking.
            </p> */}
          </div>
        </div>

        <div className='pointer-events-none w-full h-full flex items-center justify-center z-10 bg-blue-500'></div>
      </section>
    </div>
  );
};

export default HeroSection;
