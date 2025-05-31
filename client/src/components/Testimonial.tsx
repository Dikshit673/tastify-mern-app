import { Fragment, memo, ReactNode } from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

import { HType1, HType2, Swiper, SwiperItem } from './ui';
import { testimonialArr } from '@/data';
import { TestimonialItemType } from '@/data/testimonialArr';

const getStarDetails = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 > 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;
  return { fullStars, halfStars, emptyStars };
};

type starVarientsType = 'full' | 'half' | 'empty';

const starVarients: Record<starVarientsType, ReactNode> = {
  full: <FaStar className='text-prime-100 size-4' />,
  half: <FaStarHalfAlt className='text-prime-100 size-4' />,
  empty: <FaRegStar className='text-prime-100 size-4' />,
};

const StarPresenter = ({
  rating,
  varient = 'full',
}: {
  rating: number;
  varient?: starVarientsType;
}) => {
  return (
    <div className='flex items-center justify-center gap-1'>
      {[...Array(rating)].map((_, index) => {
        const Star = starVarients[varient];
        return <Fragment key={index}>{Star}</Fragment>;
      })}
    </div>
  );
};

const TestimonialItem = memo(({ item }: { item: TestimonialItemType }) => {
  const { imgSrc, name, rating, description, profession } = item;
  const { fullStars, halfStars, emptyStars } = getStarDetails(rating);

  return (
    <SwiperItem className='w-65'>
      <div className='flex flex-col items-center gap-2 px-4 py-6 text-center'>
        <figure className='my-4 size-22 overflow-hidden rounded-full'>
          <img src={imgSrc} alt={name} className='size-full object-cover' />
        </figure>
        <p className='mb-4 text-sm'>{description}</p>
        <div className='flex flex-col gap-0.5'>
          <div className='flex items-center justify-center gap-1'>
            <StarPresenter rating={fullStars} varient='full' />
            <StarPresenter rating={halfStars} varient='half' />
            <StarPresenter rating={emptyStars} varient='empty' />
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
            data={testimonialArr}
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
