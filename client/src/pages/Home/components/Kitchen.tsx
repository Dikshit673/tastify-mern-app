import { memo } from 'react';
import { HType1, HType2, Swiper, SwiperItem } from '@/components/ui';
import { kitchenStaffs } from '../data';

const Kitchen = memo(() => {
  return (
    <section className='border-b border-b-gray-500 py-12'>
      <div className='mx-auto w-9/10'>
        <HType2 hypens='both'>kitchen</HType2>
        <HType1 className='text-center'>our staffs </HType1>
        <div className='my-12 flex flex-col gap-8'>
          <Swiper
            data={kitchenStaffs}
            ButtonNav={false}
            renderItem={(item) => {
              const { id, name, imgSrc, alt, description, position } = item;
              return (
                <SwiperItem key={id} className='group w-80'>
                  <figure className='overflow-hidden rounded-t-lg'>
                    <img
                      src={imgSrc}
                      alt={alt}
                      className='aspect-square size-full rounded-t-lg object-cover transition-transform duration-150 ease-in group-hover:scale-110'
                    />
                  </figure>
                  <div className='mb-4 flex flex-col gap-4 p-4'>
                    <div>
                      <HType1 tag='h5' className='mb-0'>
                        {name}
                      </HType1>
                      <p className='border-prime-100 text-prime-100 mb-0 w-fit rounded-full border-1 px-2 py-1 text-xs font-medium uppercase'>
                        {position}
                      </p>
                    </div>
                    <p>{description}</p>
                  </div>
                </SwiperItem>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
});

export default Kitchen;
