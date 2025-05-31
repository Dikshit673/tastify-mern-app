import { memo, useEffect, useMemo, useState } from 'react';
import { Button, HType1 } from '@/components/ui';

import HeroPng from '@/assets/images/hero/pic-1.jpg';
import Thali1 from '@/assets/images/hero/thali-1.png';
import Thali2 from '@/assets/images/hero/thali-2.png';

const Hero = memo(() => {
  const [heroImg, setHeroImg] = useState(Thali1);

  useEffect(() => {
    const intervalTime = 15 * 1000; //time in ms
    const intervalId = setInterval(() => {
      setHeroImg(Thali2);
    }, intervalTime);
    return () => clearInterval(intervalId);
  }, []);

  const ImgTag = useMemo(() => {
    return (
      <img
        src={heroImg}
        alt='Thali-pic'
        className='animate-rotate size-80 object-cover lg:size-100'
      />
    );
  }, [heroImg]);

  return (
    <section
      className='h-auto border-b border-b-gray-500 py-12 md:h-[calc(100vh_-_52px)]'
      style={{
        background: `linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9)), url(${HeroPng})`,
      }}
    >
      <div className='mx-auto h-full w-9/10'>
        <div className='grid h-full grid-cols-1 gap-4 text-white md:grid-cols-2'>
          <div className='flex flex-col justify-center'>
            <HType1 tag='h1' className='mb-0 text-start text-wrap text-white'>
              Enjoy Our Best Delicious Meal
            </HType1>
            <p className='mt-4 text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              laboriosam consequatur, perspiciatis asperiores cum enim accusamus
              omnis dolores ipsam praesentium! Natus, adipisci. Rerum minima
              dicta repudiandae necessitatibus enim at. Beatae?
            </p>
            <Button className='mt-4'>order now</Button>
          </div>
          <div className='flex items-center justify-center'>{ImgTag}</div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
