import Biography from './Biography';
import HeroSection from './HeroSection';

const About = () => {
  return (
    <>
      <main className='min-h-screen pt-[57px] flex flex-col'>
        <HeroSection />
        <Biography />
      </main>
    </>
  );
};

export default About;
