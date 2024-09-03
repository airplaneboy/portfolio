'use client';
import { motion, AnimatePresence, useInView } from 'framer-motion';
//@ts-ignore
import videoSrc from '../../public/Study Express Optimized5.webm';

import { useRef } from 'react';

const IntersectionVideo = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(videoRef);

  return (
    <div className='h-[400vh] flex items-center justify-center flex-col'>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore impedit illum eligendi facilis vero dolorem
        corrupti consequatur error, esse quam a, iure illo porro rem hic unde. Quisquam eligendi quas laboriosam. Ut,
        veniam sit! Laborum, necessitatibus nostrum quo corrupti soluta, deleniti odio enim exercitationem similique
        illo, dolore temporibus iste voluptatem quibusdam perferendis quia perspiciatis accusamus. Hic impedit ipsa
        nulla? Odit quisquam nostrum vel temporibus explicabo ab cumque, fugiat molestias culpa fugit, cum libero!
        Recusandae quis iure minima quibusdam, maxime inventore iusto soluta, placeat dignissimos quas quae accusantium
        labore assumenda corporis tempora itaque numquam? Nesciunt placeat, magnam dolor eius beatae odio?Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quaerat, animi qui eveniet quisquam ex autem sunt, vel magni, quis
        repudiandae illo veritatis sed facilis dignissimos dolor et. Vel accusamus ipsa eaque explicabo totam excepturi
        quod laboriosam adipisci illum ex rerum libero fuga eos suscipit nemo aperiam, eligendi quo officiis quaerat
        consequatur amet? Tenetur veritatis esse distinctio, harum alias eos molestias reprehenderit nostrum sunt nulla
        quibusdam at error iusto quod quisquam dolore perferendis! Laboriosam beatae dolor blanditiis nostrum
        perspiciatis temporibus eveniet? Explicabo iure harum provident illum error nisi aliquam! Voluptatibus sequi
        quasi fuga. Saepe iste, error velit, tenetur neque beatae voluptates delectus fugiat id a perferendis qui,
        eveniet porro quae veritatis nihil earum tempore. Hic delectus labore rerum, expedita architecto beatae
        incidunt, dolorem tempore id numquam quod autem facere corrupti porro fuga. Consectetur nobis voluptates
        suscipit quae nostrum quaerat obcaecati facilis, saepe, omnis amet sit deserunt aspernatur exercitationem fuga
        optio rerum pariatur iusto nihil beatae illo vero qui! Architecto rerum quisquam quasi fugiat! Maxime laudantium
        quo qui dolores reprehenderit, quaerat minus culpa quos, facilis dolore dicta, a atque reiciendis eveniet ullam
        eligendi. Esse aliquam velit accusantium quasi deleniti ratione quam reprehenderit, possimus cupiditate
        molestias dolorum, ipsa culpa! Quos unde blanditiis inventore quam in, modi labore! Magnam temporibus nobis eos
        quo, quasi qui quibusdam obcaecati incidunt, cum, eum nihil voluptatibus tempora? Architecto nam expedita,
        adipisci qui quam libero id. Facere, porro ipsam. Commodi, labore enim placeat voluptatibus suscipit omnis aut
        accusamus culpa quo officiis vitae inventore quaerat molestias cumque, vero, at temporibus. Ad soluta cum facere
        beatae illum reprehenderit, fugiat quam asperiores totam esse doloremque aliquam dolor cumque voluptatibus?
        Itaque possimus iure perspiciatis nostrum beatae consectetur, dicta debitis est placeat corrupti cupiditate
        obcaecati officia a nam doloremque ut omnis necessitatibus minima dignissimos similique quos velit. Ipsam est
        eius in modi asperiores. Tempore.
      </p>
      <div className='w-screen min-h-96 h-96 bg-transparent backdrop-blur fixed inset-0'>hello</div>
      <div className='w-screen min-h-96 h-96 bg-transparent backdrop-blur-md fixed top-96 border-t-2'>hello2</div>
    </div>
  );
};

export default IntersectionVideo;
