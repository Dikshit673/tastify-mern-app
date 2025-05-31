import { FormEvent, memo, useCallback, useState } from 'react';
import { Button, HType1, HType2, FormPresenter } from '@/components/ui';

import { LoginFormFields } from './data';
import { LoginFormType } from './types';

const Login = memo(() => {
  const [formData, setFormData] = useState<LoginFormType>({
    email: '',
    password: '',
  });
  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('form submitted');
  }, []);
  return (
    <section className='w-full border-b border-b-gray-500 py-12'>
      <div className='mx-auto w-9/10'>
        <HType2 hypens='both'>login</HType2>
        <HType1 className='text-center'>login to your account</HType1>
        <div className='flex w-full flex-col justify-self-center rounded-lg bg-white p-8 sm:w-3/5 md:w-1/2 lg:w-1/3'>
          <HType1 tag='h4' className='text-prime-100 mb-2 text-center'>
            login
          </HType1>
          <form onSubmit={handleFormSubmit}>
            <FormPresenter
              formName='login'
              arr={LoginFormFields}
              fields={formData}
              setFields={setFormData}
            />
            <Button type='submit' className='my-5'>
              Login
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Login;
