import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OAuthSection from '@/components/OAuthSection';
import Passwords from '@/components/Password';

export default function SignupForm() {
  return (
    <>
      <form className='h-screen w-auto flex items-center justify-center'>
        <Card className='mx-auto max-w-sm'>
          <CardHeader>
            <CardTitle className='text-xl font-display mb-5'>Sign Up</CardTitle>
            <CardDescription>Enter your information to create an account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4'>
              {/* <div className='grid grid-cols-2 gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='first-name'>First name</Label>
                <Input id='first-name' name='first_name' placeholder='Thomas' required />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='last-name'>Last name</Label>
                <Input id='last-name' name='last_name' placeholder='Anderson' required />
              </div>
            </div> */}
              <Input
                id='username'
                name='username'
                type='text'
                autoComplete='username'
                hidden={true}
                className='hidden'
              />
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  autoComplete='email'
                  name='email'
                  placeholder='theone@example.com'
                  required
                />
              </div>
              <Passwords />

              <OAuthSection />
            </div>
            <div className='mt-4 text-center text-sm'>
              Already have an account?{' '}
              <Link href='/auth/login' className='underline'>
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
