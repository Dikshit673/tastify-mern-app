import { memo } from 'react';
import { Button, HType1, HType2 } from './ui';

import RestaurantPic from '@/assets/images/about/restaurant.jpg';

const About = memo(() => {
  return (
    <section className='border-b border-b-gray-500 py-12'>
      <div className='mx-auto w-9/10'>
        <HType2 hypens='both'>about us</HType2>
        <HType1 className='text-center'>Welcome to Tastify Restaurant</HType1>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='shadow-primary h-full rounded-lg bg-white'>
            <img
              src={RestaurantPic}
              alt='about us'
              className='h-full w-full rounded-lg object-cover'
            />
          </div>
          <div className='shadow-primary h-full rounded-lg bg-white'>
            <div className='p-8'>
              <HType1 tag='h4' className='text-prime-100 mb-2 text-start'>
                our story
              </HType1>
              <div className='mb-4 text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                dolores, eos atque totam modi suscipit quasi odit cupiditate.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus facere architecto enim ratione, suscipit quasi odit
                rem odio illum adipisci in, vitae facilis fuga hic.suscipit
                quasi odit.
              </div>
              <Button className='mb-2'>read more</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
