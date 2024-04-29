'use client';
import { Button } from './ui/button';

const LoginButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  return (
    <Button type='button' variant='outline' onClick={() => onClick()} className='w-full'>
      {children}
    </Button>
  );
};

export default LoginButton;
