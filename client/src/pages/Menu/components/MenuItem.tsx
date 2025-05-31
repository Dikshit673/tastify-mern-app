import { HType1, Button } from '@/components/ui';
import { MenuArrItemType } from '@/pages/Menu/types';
import { useAppDispatch } from '@/hooks/useRedux';
import { addToCart } from '@/redux/slices/CartSlice';
import { memo, useCallback } from 'react';
import { FaPlus } from 'react-icons/fa6';

type MenuItemProps = {
  item: MenuArrItemType;
};

export const MenuItem = memo(({ item }: MenuItemProps) => {
  const dispatch = useAppDispatch();

  const { imgSrc, imgAlt, category, name, price, description } = item;

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(item));
  }, [dispatch, item]);

  return (
    <div className='group hover:shadow-secondary hover:border-prime-100 rounded-lg border border-transparent bg-white transition-[scale,box-shadow] duration-75 ease-in'>
      <figure className='h-40 w-full overflow-hidden rounded-t-lg'>
        <img
          src={imgSrc}
          alt={imgAlt}
          className='size-full rounded-t-lg object-cover transition-transform duration-150 ease-in group-hover:scale-110'
        />
      </figure>
      <div className='flex flex-col gap-2 p-6'>
        <p className='mb-0 text-sm text-gray-500 uppercase'>{category}</p>
        <HType1 tag='h6' className='mb-0.5 text-start'>
          {name}
        </HType1>
        <p className='text-xs'>
          {description.slice(0, 50)}
          {description.length > 50 && '...'}
        </p>
        <div className='flex items-center justify-between gap-2'>
          <div className='text-prime-100'>₹{price}</div>
          <Button className='flex items-center gap-2' onClick={handleAddToCart}>
            <FaPlus />
            <span>add</span>
          </Button>
        </div>
      </div>
    </div>
  );
});
