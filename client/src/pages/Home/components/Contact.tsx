import { FormEvent, memo, useCallback, useState } from 'react';
import { ContactFormType } from '@/pages/Home/types';
import { Button, HType1, HType2, FormPresenter } from '@/components/ui';

import { ContactFormFields } from '../data';

const Contact = memo(() => {
  const [contactForm, setContactForm] = useState<ContactFormType>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { name, email, subject, message } = contactForm;
      if (!name || !email || !subject || !message) {
        alert('Please fill all fields');
        return;
      }
      alert('form submitted');
      console.log('form submitted');
    },
    [contactForm]
  );

  return (
    <section className='border-b border-b-gray-500 py-12'>
      <div className='mx-auto w-9/10'>
        <HType2 hypens='both'>contact us</HType2>
        <HType1 className='text-center'>contact for any quary</HType1>
        <div className='mb-6 grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 md:grid-cols-3'>
          <div>
            <HType2 hypens='right' className='text-start'>
              booking
            </HType2>
            <small className='font-nunito text-[1rem] text-gray-700'>
              book@example.com
            </small>
          </div>
          <div>
            <HType2 hypens='right' className='text-start'>
              general
            </HType2>
            <small className='font-nunito text-[1rem] text-gray-700'>
              info@example.com
            </small>
          </div>
          <div>
            <HType2 hypens='right' className='text-start'>
              technical
            </HType2>
            <small className='font-nunito text-[1rem] text-gray-700'>
              tech@example.com
            </small>
          </div>
        </div>
        <div className='mb-6 grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='shadow-primary h-96 rounded-lg bg-white md:h-full'>
            <iframe
              title='restaurant-google-Map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224568.36079945025!2d76.82493351406114!3d28.422858319601133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1712503264150!5m2!1sen!2sin'
              loading='lazy'
              allowFullScreen={false}
              referrerPolicy='no-referrer-when-downgrade'
              width='600'
              height='450'
              style={{ border: '0' }}
              className='h-full w-full rounded-lg outline-none'
            />
          </div>
          <div className='shadow-primary h-full rounded-lg bg-white'>
            <div className='p-8'>
              <HType1 tag='h4' className='text-prime-100 mb-2 text-center'>
                contact
              </HType1>
              <form onSubmit={handleFormSubmit}>
                <FormPresenter
                  formName='contact'
                  arr={ContactFormFields}
                  fields={contactForm}
                  setFields={setContactForm}
                />

                <Button type='submit' className='my-5'>
                  send message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
