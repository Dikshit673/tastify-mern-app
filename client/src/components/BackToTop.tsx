import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const BackToTop = () => {
  const [goToTop, setGoToTop] = useState(false);

  useEffect(() => {
    const handleBackToTop = () => {
      if (window.scrollY >= 150) {
        setGoToTop(true);
      } else {
        setGoToTop(false);
      }
    };

    window.addEventListener('scroll', handleBackToTop);

    return () => {
      window.removeEventListener('scroll', handleBackToTop);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          'bg-prime-100 fixed right-5 bottom-5 z-20 flex size-10 items-center justify-center rounded-md p-2 text-white transition-opacity duration-300 ease-in',
          { 'opacity-100': goToTop, 'opacity-0': !goToTop }
        )}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        <FaArrowUp className='size-5' />
      </div>
    </>
  );
};

export default BackToTop;
