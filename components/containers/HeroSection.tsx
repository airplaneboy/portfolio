import Link from 'next/link';
import ASCIIProfilePicture from '../ASCIIProfilePicture';
import { Button } from '@/components/ui/button';
import { HiMiniArrowUpRight } from 'react-icons/hi2';

const sectionContentStyle = 'w-full h-full flex flex-col justify-center gap-10 z-[1]';
// const ctaButton = 'capitalize border px-8 py-4 rounded-2xl items-center justify-center font-bold block';
const highlight: string | undefined =
  'italic font-bold text-blue-500 underline decoration-transparent hover:decoration-blue-500 underline-offset-4 decoration-2 transition-colors duration-100';

const HeroSection = () => {
  return (
    <section className='relative overflow-hidden' id='about-section'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center  bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,0,0,0)_15%)] dark:bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_15%)] z-10'></div>
      <div className='h-full w-full min-w-screen z-0 absolute pointer-events-none left-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />

      <div className='section pt-16 lg:pt-0 px-6 md:px-24 flex flex-col lg:flex-row justify-between items-center gap-10'>
        {/* <div className='inset-0 absolute w-full h-full bg-[linear-gradient(0deg,_rgba(52,50,44,0.7539390756302521)_0%,_rgba(46,100,97,0)_30%,_rgba(34,193,195,0)_100%)]' /> */}
        <div className={sectionContentStyle}>
          <h1 className='text-2xl min-[380px]:text-3xl md:text-5xl leading-[1] font-extrabold  pb-3 min-w-[580px] font-display flex flex-col gap-5'>
            <span className='text-lg font-primary font-light flex '>Hi, I’m</span>
            <span className='flex flex-row whitespace-nowrap'>Sulaiman Agara👋</span>
          </h1>
          <div className='leading-8 text-sm font-medium text-neutral-600 dark:text-neutral-400'>
            <p>
              a computer science student with a passion for web development, game development, 3D animation, and
              fitness. Currently serving in the U.S Army Reserves as a{' '}
              <Link
                className='font-bold underline'
                href='https://www.goarmy.com/careers-and-jobs/support-logistics/safety-order-legal/74d-cbrn-specialist'
                target='_blank'>
                CBRN
              </Link>{' '}
              specialist, I use disciplined and detail-oriented methods in my work. In my free time, I like exploring
              new technologies and creating projects.
            </p>

            {/* <p>
              I like to stay ahead of industry trends to ensure that my projects are not just functional, but also
              cutting-edge and modern. Like Chess Grandmaster Hans Niemann said, “The chess speaks for itself,” so I’m
              going to let my work do the talking.
            </p> */}
          </div>
          <div className='flex flex-row w-full gap-5 justify-center'>
            <Button className='w-full !p-0 max-w-xs'>
              <Link
                href='https://github.com/airplaneboy'
                target='_blank'
                className='w-full h-full flex items-center justify-center font-bold'>
                Github
                <HiMiniArrowUpRight />
              </Link>
            </Button>
            <Button className='w-full !p-0 max-w-xs' variant='secondary'>
              <Link
                href='https://drive.google.com/file/d/1pVZ52y1Buu-mydcCk4xKXaPLgxdxqzSl/view?usp=sharing'
                target='_blank'
                className='w-full h-full flex items-center justify-center font-bold'>
                Résumé
                <HiMiniArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>

        <div className='relative'>
          <div className='pointer-events-none max-lg:scale-105 absolute w-full bg-gradient-to-r from-transparent via-transparent to-white dark:to-transparent lg:dark:to-[#070707] z-10 h-full' />
          <pre className='hidden dark:block pointer-events-none max-lg:scale-95 absolute w-full h-full z-[1] bg-[linear-gradient(330deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_20%,rgba(255,255,255,1)_20%,rgba(255,255,255,1)_45%,rgba(255,255,255,1)_45%,rgba(255,255,255,1)_55%,rgba(255,255,255,1)_55%,rgba(255,255,255,1)_80%,rgba(0,0,0,0)_80%)]' />
          <ASCIIProfilePicture className='overflow text-[9px] leading-none inset-0 z-[5] relative text-black' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
