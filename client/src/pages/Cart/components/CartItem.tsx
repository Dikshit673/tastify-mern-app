import { memo, MouseEvent, useCallback } from 'react';
import { FaTrash } from 'react-icons/fa6';
import { Counter } from '@/components/ui';
import { useAppDispatch } from '@/hooks/useRedux';

import { updateQuantity, removeFromCart } from '@/redux/slices/CartSlice';
import { CartItemType } from '../types';

type CartItemProps = {
  item: CartItemType;
};

export const CartItem = memo(({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const { id, name, description, imgSrc, imgAlt, quantity, price } = item;

  const handleCounter = useCallback(
    (e: MouseEvent<HTMLUListElement>) => {
      e.preventDefault();
      const elem = e.target as HTMLElement;
      if (!elem) return;
      const liElem = elem.closest('li');
      if (!liElem) return;
      const action = liElem.getAttribute('data-action');
      if (!action) return;

      const min = 1,
        max = 10;

      if (action === 'count') return;
      if (action === 'plus') {
        if (quantity < max) {
          dispatch(updateQuantity({ id, quantity: quantity + 1 }));
        } else {
          dispatch(updateQuantity({ id, quantity }));
          alert('Maximum limit reached');
        }
      } else if (action === 'minus') {
        if (quantity > min) {
          dispatch(updateQuantity({ id, quantity: quantity - 1 }));
        } else {
          dispatch(updateQuantity({ id, quantity }));
          alert('Minimum limit reached');
        }
      } else {
        dispatch(updateQuantity({ id, quantity }));
      }
    },
    [dispatch, id, quantity]
  );

  const handleRemoveFromCart = useCallback(() => {
    dispatch(removeFromCart({ id }));
  }, [dispatch, id]);

  return (
    <div className='flex items-stretch justify-between border-b border-dotted border-b-gray-500 py-2'>
      <div className='flex gap-4'>
        <figure className='h-20 w-30 overflow-hidden rounded-lg'>
          <img loading='lazy' src={imgSrc} alt={imgAlt} className='size-full object-cover' />
        </figure>
        <div className='space-y-1'>
          <div>
            <h6 className='font-nunito font-semibold capitalize'>{name}</h6>
            <p className='text-xs text-gray-500'>
              {description.slice(0, 20).concat('...')}
            </p>
          </div>
          <Counter count={quantity} handleCount={handleCounter} />
        </div>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <h6 className='font-semibold'>₹{quantity * price}</h6>
        <div>
          <FaTrash
            className='cursor-pointer text-red-500'
            onClick={handleRemoveFromCart}
          />
        </div>
      </div>
    </div>
  );
});
