import { memo } from 'react';
import { HType1, HType2 } from './ui';
import { servicesArr } from '@/data';

const Services = memo(() => {
  return (
    <section className='border-b border-b-gray-500 py-12'>
      <div className='mx-auto w-9/10'>
        <HType2 hypens='both'>services</HType2>
        <HType1 className='text-center'>Explore our Services</HType1>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {servicesArr.map((service) => (
            <div
              key={service.id}
              className='hover:shadow-secondary rounded-lg bg-white p-8 transition-[scale,box-shadow] duration-75 ease-in hover:scale-105'
            >
              <div className='flex flex-col gap-2'>
                <span className='*:text-prime-100 inline-block *:size-[3rem]'>
                  {service.icon}
                </span>
                <HType1 tag='h5' className='text-start'>
                  {service.title}
                </HType1>
                <div className='text-sm'>{service.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Services;
