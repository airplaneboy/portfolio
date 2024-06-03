'use client';
import { motion, AnimatePresence, useInView } from 'framer-motion';
//@ts-ignore
import videoSrc from '../../public/Study Express Optimized5.webm';

import { useRef } from 'react';

const IntersectionVideo = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(videoRef);

  return (
    <div className='h-[300vh] flex items-center justify-center flex-col'>
      <AnimatePresence>
        <div ref={videoRef} className='h-[calc((9_/_15.98)_*_100vw)] md:h-80 '>
          {isInView && (
            <motion.video
              key='video'
              transition={{ duration: 1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              className='h-[calc((9_/_15.98)_*_100vw)] md:h-80 border-y-2 shadow-neutral-400 dark:shadow-black rounded-sm w-full mr-[2px] border-0 overflow-hidden '
              playsInline
              loop
              autoPlay
              muted
              preload='none'
              // src={videoSrc}
              src='/Study Express Optimized5.webm'
              controls={false}></motion.video>
          )}
        </div>

        <h1 key='text' className='text-7xl font-extrabold'>
          Hello
        </h1>
      </AnimatePresence>
    </div>
  );
};

export default IntersectionVideo;
