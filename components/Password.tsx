'use client';
import { signup } from '@/app/auth/login/actions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react';
import isStrongPassword from 'validator/es/lib/isStrongPassword';
import equals from 'validator/es/lib/equals';
import { AlertError } from './Alert';
const Passwords = () => {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isPasswordOK, setIsPasswordOK] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState({ password: false, confirmPassword: false });
  const [passwordError, setPasswordError] = useState<{ bool: boolean; title?: string; description?: string }>({
    bool: false,
    title: 'Error',
    description: 'An Error Occurred',
  });

  useEffect(() => {
    if (password == '') return;

    if (isStrongPassword(password, { minLength: 6, minLowercase: 0, minNumbers: 0, minSymbols: 0, minUppercase: 0 })) {
      setPasswordError({ bool: false });

      if (confirmPassword == '') return;
      else if (equals(password, confirmPassword)) {
        setIsPasswordOK(true);
        return setPasswordError({
          bool: false,
        });
      } else {
        setIsPasswordOK(false);
        setPasswordError({
          bool: true,
          title: "Passwords Don't Match",
          description: "Confirm Password doesn't Match Password. Try retyping slowly.",
        });
      }
    } else {
      setIsPasswordOK(false);
      setPasswordError({
        bool: true,
        title: 'Too Short',
        description: ' Password Must be At least six (6) characters.',
      });
    }
  }, [password, confirmPassword]);

  return (
    <>
      <AlertError
        show={passwordError.bool}
        setShow={setPasswordError}
        title={passwordError?.title || 'Error'}
        className='fixed top-8 left-1/2 max-md:-translate-x-1/2 md:left-8 max-w-xs md:max-w-md backdrop-blur dark:bg-black/75 z-40'>
        {passwordError.description}
      </AlertError>

      <div className='grid gap-2 relative'>
        <Label htmlFor='password'>Password</Label>
        <Input
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name='password'
          autoComplete='new-password'
          type={isPasswordVisible.password ? 'text' : 'password'}
        />
        <Eye
          className={(isPasswordVisible.password == true && 'hidden') + ' absolute z-10 right-5 top-1/2 cursor-pointer'}
          onClick={() =>
            setIsPasswordVisible((prev) => {
              return { ...prev, password: !prev.password };
            })
          }
        />
        <EyeOff
          className={
            (isPasswordVisible.password == false && 'hidden') + ' absolute z-10 right-5 top-1/2 cursor-pointer'
          }
          onClick={() =>
            setIsPasswordVisible((prev) => {
              return { ...prev, password: !prev.password };
            })
          }
        />
      </div>
      <div className='grid gap-2 relative'>
        <Label htmlFor='confirm-password'>Confirm Password</Label>
        <Input
          id='confirm-password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          name='confirm_password'
          autoComplete='new-password'
          type={isPasswordVisible.confirmPassword ? 'text' : 'password'}
        />
        <Eye
          className={
            (isPasswordVisible.confirmPassword == true && 'hidden') + ' absolute z-10 right-5 top-1/2 cursor-pointer'
          }
          onClick={() =>
            setIsPasswordVisible((prev) => {
              return { ...prev, confirmPassword: !prev.confirmPassword };
            })
          }
        />
        <EyeOff
          className={
            (isPasswordVisible.confirmPassword == false && 'hidden') + ' absolute z-10 right-5 top-1/2 cursor-pointer'
          }
          onClick={() =>
            setIsPasswordVisible((prev) => {
              return { ...prev, confirmPassword: !prev.confirmPassword };
            })
          }
        />
      </div>
      <Button disabled={isPasswordOK == false} type='submit' formAction={signup} className={'w-full'}>
        Create an account
      </Button>
    </>
  );
};

export default Passwords;
