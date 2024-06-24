import Project from '@/components/containers/Project';
import Link from 'next/link';

const link =
  'italic font-bold text-blue-500 underline decoration-transparent hover:decoration-blue-500 underline-offset-4 decoration-4 transition-colors duration-100 cursor-pointer';

const highlight = 'text-gray-700 dark:text-gray-300 font-semibold';

const items = [
  {
    link: process.env.NEXT_PUBLIC_STUDY_EXPRESS_LINK,
    heading: 'Study Express Academy',
    videoSrc: '/Study Express Optimized5.webm',
    description: (
      <>
        Enter{' '}
        <Link href={process.env.NEXT_PUBLIC_STUDY_EXPRESS_LINK as string} target='_blank' className={highlight}>
          Study Express
        </Link>
        , a cutting-edge Learning Management System (LMS) platform designed to assist students of all levels with the
        tools they need to succeed academically. It offers a comprehensive suite of features to meet the needs of
        learners from subject-specific courses to interactive study materials.
      </>
    ),
  },
  {
    link: process.env.NEXT_PUBLIC_AI_IMAGE_GENERATOR_LINK,
    heading: 'Pluto AI Image Generator',
    videoSrc: '/Study Express Optimized5.webm',
    description: (
      <>
        <Link href={process.env.NEXT_PUBLIC_AI_IMAGE_GENERATOR_LINK as string} target='_blank' className={highlight}>
          Pluto AI Image Generator
        </Link>{' '}
        is all about creating an easy-to-use application that uses{' '}
        <Link href='https://replicate.com/' target='_blank' rel='nofollow' className={link}>
          Replicate
        </Link>
        &apos;s powerful machine learning models to generate beautiful images from text inputs. It can be used for
        visualizing concepts, or simply having fun.
      </>
    ),
  },
  {
    link: process.env.NEXT_PUBLIC_USERNAME_AVAILABILITY_LINK,
    heading: 'Username Availability Checker',
    videoSrc: '/Study Express Optimized5.webm',
    description: (
      <>
        <Link href={process.env.NEXT_PUBLIC_USERNAME_AVAILABILITY_LINK as string} target='_blank' className={highlight}>
          The Username Availability Checker
        </Link>{' '}
        finds the availability of a username across popular social media platforms. It manually check the availability
        of a username even on platforms without a public API for doing so. Might look simple on the surface, but trust
        me that&apos;s because the backend is doing all of the hard-work.
      </>
    ),
  },
  {
    link: process.env.NEXT_PUBLIC_ELEARNING_API_LINK,
    heading: 'E-Learning Platform API',
    videoSrc: '/Study Express Optimized5.webm',
    description: (
      <>
        This{' '}
        <Link href={process.env.NEXT_PUBLIC_ELEARNING_API_LINK as string} target='_blank' className={highlight}>
          E-Learning Platform API
        </Link>{' '}
        project provides functionalities for managing courses, lessons, users, assessments, and progress tracking.
        It&apos;s perfect for delivering high-quality educational content to learners worldwide. In fact, I used some of
        it&apos;s functionalities in the{' '}
        <Link href={process.env.NEXT_PUBLIC_STUDY_EXPRESS_LINK || ''} target='_blank' className={link}>
          Study Express
        </Link>{' '}
        Project . It helped me learn how to build a robust backend API to manage everything from user registrations to
        course content and assessments.
      </>
    ),
  },
  {
    link: process.env.NEXT_PUBLIC_FASHION_LINK,
    heading: 'Fashion Designing Landing Page',
    videoSrc: '/Study Express Optimized5.webm',
    description: (
      <>
        This{' '}
        <Link className={highlight} href={process.env.NEXT_PUBLIC_FASHION_LINK as string} target='_blank'>
          Fashion Designing Landing Page
        </Link>{' '}
        focuses on designing a visually appealing and interactive landing page that showcases a unique style and
        collections for a fashion brand. It&apos;s perfect for making a great first impression on potential customers.
      </>
    ),
  },
  {
    link: process.env.NEXT_PUBLIC_GALLERY_LINK,
    heading: 'Dynamic Online Gallery',
    videoSrc: '/Study Express Optimized5.webm',
    description: (
      <>
        The{' '}
        <Link href={process.env.NEXT_PUBLIC_GALLERY_LINK as string} target='_blank' className={highlight}>
          Dynamic Online Gallery
        </Link>
        , the landing page of an online gallery, is all about designing a page that highlights a gallery&apos;s
        collections, exhibitions, and events. It gives the visitors an immersive virtual tour and keeps them informed
        about upcoming shows.
      </>
    ),
  },
];

const Projects = () => {
  return (
    <section
      id='projects-section'
      className='min-h-screen pt-[57px] flex flex-col dark:bg-dot-white/[0.1] bg-dot-black/[0.3] relative shadow-gray-300 dark:shadow-black shadow-md'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_85%,rgba(255,255,255,1)_100%)] dark:bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_85%,rgba(0,0,0,1)_100%)]'></div>

      <h1 className='z-20 w-full text-center underline decoration-4 underline-offset-[4px] pt-20 relative -top-1 decoration decoration-neutral-500 uppercase border-t border-dashed border-neutral-500'>
        Projects
      </h1>
      <div className=' py-32 w-full h-full flex flex-col items-center justify-between gap-40 px-24 max-w-7xl mx-auto z-10'>
        {items.map((item, index) => (
          <Project
            link={item.link}
            key={index}
            videoSrc={item.videoSrc}
            heading={item.heading}
            description={item.description}
            reverse={Boolean(index % 2)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
