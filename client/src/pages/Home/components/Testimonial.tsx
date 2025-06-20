import { memo } from 'react';

import {
  HType1,
  HType2,
  StarPresenter,
  Swiper,
  SwiperItem,
} from '@/components/ui';
import { TestimonialsData } from '../data';
import { TestimonialsArrItemType } from '../types';

const getStarDetails = (rating: number) => {
  const totalFullStars = Math.floor(rating);
  const totalHalfStars = rating % 1 > 0 ? 1 : 0;
  const totalEmptyStars = 5 - totalFullStars - totalHalfStars;
  return { totalFullStars, totalHalfStars, totalEmptyStars };
};

type TestimonialItemProps = {
  item: TestimonialsArrItemType;
};

const TestimonialItem = memo(({ item }: TestimonialItemProps) => {
  const { imgSrc, name, rating, description, profession } = item;
  const { totalFullStars, totalHalfStars, totalEmptyStars } =
    getStarDetails(rating);

  return (
    <SwiperItem className='w-65'>
      <div className='flex flex-col items-center gap-2 px-4 py-6 text-center'>
        <figure className='my-4 size-22 overflow-hidden rounded-full'>
          <img loading='lazy' src={imgSrc} alt={name} className='size-full object-cover' />
        </figure>
        <p className='mb-4 text-sm'>{description}</p>
        <div className='flex flex-col gap-0.5'>
          <div className='flex items-center justify-center gap-1'>
            <StarPresenter rating={totalFullStars} varient='full' />
            <StarPresenter rating={totalHalfStars} varient='half' />
            <StarPresenter rating={totalEmptyStars} varient='empty' />
          </div>

          <h3 className='mb-0 text-lg font-bold capitalize'>{name}</h3>
          <p className='text-sm uppercase'>{profession}</p>
        </div>
      </div>
    </SwiperItem>
  );
});

const Testimonial = memo(() => {
  return (
    <section className='border border-gray-500 py-12'>
      <div className='mx-auto w-9/10'>
        <HType2 hypens='both'>testimonials</HType2>
        <HType1 tag='h3' className='text-center'>
          what our customers say
        </HType1>
        <div className='my-12 flex flex-col gap-8'>
          <Swiper
            data={TestimonialsData}
            renderItem={(item) => {
              const { id } = item;
              return <TestimonialItem key={id} item={item} />;
            }}
          />
        </div>
      </div>
    </section>
  );
});

export default Testimonial;
