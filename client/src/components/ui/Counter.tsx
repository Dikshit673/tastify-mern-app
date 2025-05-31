import { memo, MouseEvent } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

interface CounterProps {
  count: number;
  //   min: number;
  //   max: number;
  handleCount: (e: MouseEvent<HTMLUListElement>) => void;
}

const Counter = memo(({ count, handleCount }: CounterProps) => {
  //   const [count, setCount] = useState(initialCount);

  return (
    <ul
      className='flex w-fit gap-3 rounded-full border border-gray-400 text-sm font-medium select-none *:*:m-auto *:flex *:items-center *:justify-center *:py-0.5'
      onClick={handleCount}
    >
      <li data-action='minus' className='cursor-pointer ps-2'>
        <FaMinus />
      </li>
      <li data-action='count' className='cursor-default'>
        {count}
      </li>
      <li data-action='plus' className='cursor-pointer pe-2'>
        <FaPlus />
      </li>
    </ul>
  );
});

export { Counter };
