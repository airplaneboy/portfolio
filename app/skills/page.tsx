import HTMLLogo from '../../components/skills logo/HTMLLogo';
import CSSLogo from '../../components/skills logo/CSSLogo';
import JSLogo from '../../components/skills logo/JSLogo';
import TSLogo from '../../components/skills logo/TSLogo';
import ReactLogo from '@/components/skills logo/ReactLogo';
import NodeLogo from '@/components/skills logo/NodeLogo';
import MongoDBLogo from '@/components/skills logo/MongoDBLogo';
import CSharpLogo from '@/components/skills logo/CSharpLogo';
import NextJSLogo from '@/components/skills logo/NextJSLogo';
import ExpressJSLogo from '@/components/skills logo/ExpressJSLogo';

const SkillsPage = () => {
  // const items = 'leading-[normal] select-none font-primary !text-[0.4rem] w-fit !p-0 !bg-transparent';
  const items =
    'leading-tight select-none font-primary !text-[0.17rem] md:!text-[0.25rem] lg:!text-[0.4rem] w-fit !p-0 !bg-transparent !max-w-[100vw] !overflow-hidden';

  return (
    <div id='skills-section' className='dark:bg-transparent bg-neutral-950'>
      <section className='min-h-screen pt-[57px] flex flex-col dark:bg-grid-small-white/[0.1] bg-grid-small-white/[0.2] relative border-t border-dashed border-neutral-500 shadow-inner dark:shadow-black'>
        {/* <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:from-black bg-gradient-to-b from-white via-transparent to-transparent'></div> */}
        {/* <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_15%,rgba(0,0,0,0)_70%,rgba(0,0,0,1)_90%)]' /> */}

        <h1 className='text-white z-20 w-full text-center underline decoration-4 underline-offset-[4px] pt-20 relative -top-1 decoration decoration-neutral-500 uppercase'>
          Skills
        </h1>
        <div className='py-32 w-full h-full flex flex-wrap items-center justify-evenly gap-10 px-6 md:px-12 max-w-7xl mx-auto z-10'>
          <HTMLLogo className={items} />
          <CSSLogo className={items} />
          <JSLogo className={items} />
          <TSLogo className={items} />
          <ReactLogo className={items} />
          <NodeLogo className={items} />
          <MongoDBLogo className={items} />
          <ExpressJSLogo className={items} />
          <CSharpLogo className={items} />
          <NextJSLogo className={items} />
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
