import { handleSignInWithGoogle } from '@/app/auth/login/actions';
import LoginButton from './LoginButton';

const OAuthSection = () => {
  return (
    <>
      <div className='flex items-center justify-center w-full relative my-3'>
        <div className='absolute border-t border-black dark:border-white inset-0 border-dashed h-[0px] top-1/2'></div>
        <span className='bg-white dark:bg-[#0a0a0a] z-[1] px-2 leading-3 text-[10px] tracking-widest'>
          OR CONTINUE WITH
        </span>
      </div>
      <LoginButton onClick={handleSignInWithGoogle}>Login with Google</LoginButton>
    </>
  );
};

export default OAuthSection;
