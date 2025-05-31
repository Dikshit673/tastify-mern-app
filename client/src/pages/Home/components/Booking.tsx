import { FormEvent, memo, useCallback, useState } from 'react';
import { BookingFormStateType } from '@/pages/Home/types';
import { Button, HType1, HType2, FormPresenter } from '@/components/ui';

import { BookingFormFields } from '../data';
import DinningTablePic from '@/assets/images/booking/dinning-1.jpeg';

const Booking = memo(() => {
  const [bookForm, setBookForm] = useState<BookingFormStateType>({
    name: '',
    email: '',
    phone: '',
    datetime: '',
    guests: '',
    message: '',
  });

  const handleFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { name, email, phone, datetime, guests } = bookForm;
      if (!name || !email || !phone || !datetime || !guests) {
        alert('Please fill all fields');
        return;
      }
      alert('form submitted');
      console.log('form submitted');
    },
    [bookForm]
  );

  return (
    <section className='border-b border-b-gray-500 py-12'>
      <div className='mx-auto w-9/10'>
        <HType2 hypens='both'>Reservation</HType2>
        <HType1 className='text-center'>book a table online</HType1>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='shadow-primary h-full rounded-lg bg-white'>
            <img
              src={DinningTablePic}
              alt='reservation'
              className='h-full w-full rounded-lg object-cover'
            />
          </div>
          <div className='shadow-primary h-full rounded-lg bg-white'>
            <div className='p-8'>
              <HType1 tag='h4' className='text-prime-100 mb-2 text-center'>
                booking
              </HType1>
              <form onSubmit={handleFormSubmit}>
                <FormPresenter
                  formName='booking'
                  arr={BookingFormFields}
                  fields={bookForm}
                  setFields={setBookForm}
                />

                <Button type='submit' className='my-5'>
                  book now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Booking;
