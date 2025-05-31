import { ReactNode } from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar, FaRegStar } from 'react-icons/fa6';
import { Fragment } from 'react/jsx-runtime';

type starVarientsType = 'full' | 'half' | 'empty';

const starVarients: Record<starVarientsType, ReactNode> = {
  full: <FaStar className='text-prime-100 size-4' />,
  half: <FaStarHalfAlt className='text-prime-100 size-4' />,
  empty: <FaRegStar className='text-prime-100 size-4' />,
};

type StarPresenterProps = {
  rating: number;
  varient?: starVarientsType;
};

export const StarPresenter = ({
  rating,
  varient = 'full',
}: StarPresenterProps) => {
  return (
    <div className='flex items-center justify-center gap-1'>
      {[...Array(rating)].map((_, index) => {
        const Star = starVarients[varient];
        return <Fragment key={index}>{Star}</Fragment>;
      })}
    </div>
  );
};
