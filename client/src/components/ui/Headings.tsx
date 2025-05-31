import { cn } from '@/lib/utils';
import { FC, HTMLAttributes, memo } from 'react';

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingType1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: string;
  className?: string;
  tag?: Tags;
}

const tagsClasses: Record<Tags, string> = {
  h1: 'mb-8 text-[3.5rem] font-extrabold',
  h2: 'mb-7 text-[3rem] font-extrabold',
  h3: 'mb-6 text-[2.5rem] font-bold',
  h4: 'mb-5 text-[2rem] font-bold',
  h5: 'mb-4 text-[1.5rem] font-semibold',
  h6: 'mb-3 text-[1.25rem] font-semibold',
};

const HType1: FC<HeadingType1Props> = memo(
  ({ children, tag = 'h3', className = '', ...props }) => {
    return (
      <h1
        {...props}
        className={cn(
          'font-nunito text-black capitalize',
          tagsClasses[tag],
          className
        )}
      >
        {children}
      </h1>
    );
  }
);

interface HeadingType2Props extends HTMLAttributes<HTMLHeadingElement> {
  children: string;
  className?: string;
  hypens?: 'normal' | 'both' | 'left' | 'right';
}

const leftClasses =
  'bg-prime-100 absolute top-1/2 h-0.5 w-[45px] translate-x-[calc(-45%-2rem)] -translate-y-1/2 content-[""]';

const rightClasses =
  'bg-prime-100 absolute top-1/2 h-0.5 w-[45px] translate-x-[calc(-55%+2rem)] -translate-y-1/2 content-[""]';

const HType2: FC<HeadingType2Props> = memo(
  ({ children, className = '', hypens = 'normal', ...props }) => {
    return (
      <h5
        {...props}
        className={cn(
          'font-cursive text-prime-100 relative mb-2 text-center text-[1.25rem] capitalize',
          className
        )}
      >
        {(hypens === 'left' || hypens === 'both') && (
          <span className={cn(leftClasses)} aria-hidden='true'></span>
        )}
        {children}
        {(hypens === 'right' || hypens === 'both') && (
          <span className={cn(rightClasses)} aria-hidden='true'></span>
        )}
      </h5>
    );
  }
);

export { HType1, HType2 };
