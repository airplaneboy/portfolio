import { list } from '@vercel/blob';

async function VideoComponent({ fileName }: { fileName: string }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video
      playsInline
      className='shadow-lg border-t dark:border-t-0 shadow-neutral-400 dark:shadow-black rounded-sm w-full mr-[2px] border-0 overflow-hidden'
      loop
      autoPlay
      muted
      preload='auto'>
      <source src={url} type='video/webm' />
      Your browser does not support the video tag.
    </video>
    // <video controls preload='none' aria-label='Video player'>
    //   <source src={url} type='video/webm' />
    //   Your browser does not support the video tag.
    // </video>
  );
}

export default VideoComponent;
