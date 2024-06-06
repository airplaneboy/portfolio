import { cn } from '@/lib/utils';

const Project = ({
  videoSrc,
  heading,
  description,
  reverse,
}: {
  videoSrc?: string;
  heading: string;
  description: string | React.ReactNode;
  reverse?: boolean;
}) => {
  return (
    <div
      className={cn(' flex flex-row justify-between items-center gap-20', reverse && 'flex-row-reverse')}
      id={heading}>
      <video
        playsInline
        className='shadow-lg border-t dark:border-t-0 shadow-neutral-400 dark:shadow-black rounded-sm w-full mr-[2px] border-0 overflow-hidden'
        loop
        autoPlay
        muted
        preload='auto'>
        <source src={videoSrc} type='video/webm' />
        Your browser does not support the video tag.
      </video>

      <div className='w-full flex flex-col justify-center gap-5'>
        <h2 className='text-2xl font-display leading-[1] font-extrabold text-neutral-600 dark:text-neutral-400 tracking-tight'>
          {heading}
        </h2>
        <p className='leading-6 text-base font-medium text-neutral-500 tracking-wide sm:tracking-normal'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;
