import { AlertCircle, XCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AlertError({
  title,
  children,
  className = '',
  show,
  setShow,
}: {
  title: string;
  children: React.ReactNode;
  className?: string | undefined;
  show?: boolean;
  setShow?: any;
}) {
  return (
    <>
      {show && (
        <Alert variant='destructive' className={className + ' flex flex-col gap-3'}>
          <div className='flex flex-row justify-between w-full'>
            <span className='flex items-center gap-2 justify-center'>
              <AlertCircle className='h-4 w-4' />
              <AlertTitle className='mb-0 font-bold'>{title}</AlertTitle>
            </span>

            <XCircle onClick={() => setShow({ bool: false })} className='h-5 w-5 cursor-pointer' />
          </div>

          <AlertDescription>{children}</AlertDescription>
        </Alert>
      )}
    </>
  );
}
