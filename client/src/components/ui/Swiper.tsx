import { cn } from '@/lib/utils';
import {
  FC,
  HTMLAttributes,
  memo,
  MouseEvent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

interface SwiperProps<T> extends HTMLAttributes<HTMLUListElement> {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  clasName?: string;
  PrevNext?: boolean;
  ButtonNav?: boolean;
}

const SwiperCom = <T,>({
  data,
  renderItem,
  PrevNext = true,
  ButtonNav = true,
  className = '',
}: SwiperProps<T>) => {
  const [visibleCards, setVisibleCards] = useState<number>(1);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);

  const containerRef = useRef<HTMLUListElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  // const lastIndex = data.length - visibleCards;
  const NavItems = useMemo(() => {
    return [...Array(Math.max(data.length - visibleCards + 1, 1))];
  }, [visibleCards, data]);

  useEffect(() => {
    (() => {
      const container = containerRef.current;
      if (!container) return;
      const containerWidth = container.offsetWidth;
      // console.log(containerWidth);
      const liElemSelect = container.querySelector('li');
      if (!liElemSelect) return;
      const cardWidth = liElemSelect.offsetWidth + 16;
      // console.log(cardWidth);
      setVisibleCards(Math.floor(containerWidth / cardWidth));
    })();
  }, []);

  // --- AUTOPLAY ---
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current) {
        const nextIndex =
          activePageIndex === NavItems.length - 1 ? 0 : activePageIndex + 1;
        scrollToIndex(nextIndex);
        setActivePageIndex(nextIndex);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activePageIndex, NavItems]);

  // --- DRAG HANDLERS ---
  const onMouseDown = (e: MouseEvent<HTMLUListElement>) => {
    e.preventDefault();
    // console.log(e);
    const container = containerRef.current;
    if (!container) return;
    isDragging.current = true;
    startX.current = e.pageX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
  };

  const onMouseMove = (e: MouseEvent<HTMLUListElement>) => {
    e.preventDefault();
    if (!isDragging.current || !containerRef.current) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      snapToNearest();
    }
  };

  const onMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      snapToNearest();
    }
  };

  // --- SNAP TO NEAREST SLIDE ---
  const snapToNearest = () => {
    const container = containerRef.current;
    if (!container) return;

    const firstCard = container.querySelector('li');
    if (!firstCard) return;

    // console.log({ ...container }, '/n', { ...firstCard });

    const cardWidth = firstCard.clientWidth + 16; // 16px = gap-4
    // console.log('a', cardWidth);
    const scrollLeftVal = container.scrollLeft;
    // console.log('b', scrollLeftVal);
    const index = Math.round(scrollLeftVal / cardWidth);
    // console.log(index);

    if (index < NavItems.length) {
      scrollToIndex(index);
      setActivePageIndex(index);
    } else {
      scrollToIndex(0);
      setActivePageIndex(0);
    }
  };

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const firstCard = container.querySelector('li');
    if (!firstCard) return;
    // console.log({ ...container });

    const cardWidth = firstCard.clientWidth + 16;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  const handleNavigation = (e: MouseEvent<HTMLUListElement>) => {
    const element = e.target as HTMLLIElement;
    const index = element.closest('li')?.getAttribute('data-index');
    if (index) {
      const parseIndex = parseInt(index);
      scrollToIndex(parseIndex);
      setActivePageIndex(parseIndex);
    }
  };

  const handlePrevOrNext = (e: MouseEvent<HTMLButtonElement>) => {
    const element = e.currentTarget;
    const direction = element.getAttribute('data-action');

    if (direction === 'prev') {
      const prevIndex =
        activePageIndex === 0 ? NavItems.length - 1 : activePageIndex - 1;
      scrollToIndex(prevIndex);
      setActivePageIndex(prevIndex);
    } else {
      const nextIndex =
        activePageIndex === NavItems.length - 1 ? 0 : activePageIndex + 1;
      scrollToIndex(nextIndex);
      setActivePageIndex(nextIndex);
    }
  };

  // console.log(activePageIndex);

  return (
    <div className='relative'>
      <ul
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        className={cn(
          'snap-mandatory overflow-hidden',
          'cursor-grab select-none active:cursor-grabbing',
          'flex w-full items-center gap-4',
          'transition-all duration-75 ease-in',
          className
        )}
      >
        {data.map((item, index) => {
          return renderItem(item, index);
        })}
      </ul>
      {PrevNext && (
        <>
          <div className='text-prime-100 absolute top-1/2 -left-2 z-10 flex h-full -translate-y-1/2 items-center bg-transparent px-1 transition-all duration-75 ease-in'>
            <button
              data-action='prev'
              onClick={handlePrevOrNext}
              className='cursor-pointer'
            >
              <FaAngleLeft className='size-8' />
            </button>
          </div>
          <div className='text-prime-100 absolute top-1/2 -right-2 z-10 flex h-full -translate-y-1/2 items-center bg-transparent px-1 transition-all duration-75 ease-in'>
            <button
              data-action='next'
              onClick={handlePrevOrNext}
              className='cursor-pointer'
            >
              <FaAngleRight className='size-8' />
            </button>
          </div>
        </>
      )}
      {ButtonNav && (
        <div className='absolute top-[104%] left-1/2 z-10 -translate-x-1/2'>
          <ul
            className='flex items-center justify-center gap-1.5'
            onClick={handleNavigation}
          >
            {NavItems.map((_, index) => {
              return (
                <li
                  key={index}
                  data-index={index}
                  className={cn(
                    'size-2.5 rounded-full bg-gray-300 transition-all duration-150 ease-in',
                    activePageIndex === index && 'bg-prime-100'
                  )}
                ></li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

interface SwiperItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
}

const SwiperItemCom: FC<SwiperItemProps> = ({ children, className = '' }) => {
  return (
    <li
      className={cn('w-65 shrink-0 snap-start rounded-lg bg-white', className)}
    >
      {children}
    </li>
  );
};

const SwiperItem = memo(SwiperItemCom) as typeof SwiperItemCom;

const Swiper = memo(SwiperCom) as typeof SwiperCom;

export { Swiper, SwiperItem };
