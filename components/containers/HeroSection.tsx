import Link from 'next/link';

const sectionContentStyle = 'w-full h-full flex flex-col items-center justify-center gap-10 z-[1]';
// const ctaButton = 'capitalize border px-8 py-4 rounded-2xl items-center justify-center font-bold block';
const highlight: string | undefined =
  'italic font-bold text-blue-500 underline decoration-transparent hover:decoration-blue-500 underline-offset-4 decoration-2 transition-colors duration-100';

const HeroSection = () => {
  return (
    <section className='relative' id='about-section'>
      <div className='h-full w-full min-w-screen z-0 absolute pointer-events-none left-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
      <div className='section flex flex-row justify-between items-center'>
        {/* <div className='inset-0 absolute w-full h-full bg-[linear-gradient(0deg,_rgba(52,50,44,0.7539390756302521)_0%,_rgba(46,100,97,0)_30%,_rgba(34,193,195,0)_100%)]' /> */}
        <div className={sectionContentStyle}>
          <h1 className='text-5xl leading-[1] font-extrabold  pb-3 min-w-[580px] font-display flex flex-col gap-5'>
            <span className='text-lg font-primary font-light flex '>Hi, I’m</span>
            <span className='flex flex-row whitespace-nowrap'>Sulaiman Agara👋</span>
          </h1>
          <div className='leading-8 text-sm font-medium text-neutral-600 dark:text-neutral-400'>
            <p>
              I’m passionate about coding and designing. I started programming as a hobby when I was 14, and now it’s my
              lifestyle. Currently, I develop full-stack websites using{' '}
              <Link href='https://nextjs.org/' rel='nofollow' target='_blank' className={highlight}>
                Next.js
              </Link>{' '}
              and{' '}
              <Link href='https://expressjs.com/' rel='nofollow' target='_blank' className={highlight}>
                Express.js
              </Link>
              .
            </p>

            {/* <p>
              I like to stay ahead of industry trends to ensure that my projects are not just functional, but also
              cutting-edge and modern. Like Chess Grandmaster Hans Niemann said, “The chess speaks for itself,” so I’m
              going to let my work do the talking.
            </p> */}
          </div>
        </div>

        <div className='pointer-events-none w-full h-full flex items-center justify-center z-10 bg-blue-500'></div>
      </div>
    </section>
  );
};

export default HeroSection;
