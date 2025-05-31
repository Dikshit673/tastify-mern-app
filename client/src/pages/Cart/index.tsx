import { memo, useMemo } from 'react';
import { FaCartShopping } from 'react-icons/fa6';

import { Button, HType1, HType2 } from '@/components/ui';
import { useShallowAppSelector } from '@/hooks/useRedux';
import { CartItem } from './components/CartItem';

const Cart = memo(() => {
  const cart = useShallowAppSelector((state) => state.cart.cartItems);

  const extraCost: { delievery: number; discount: number; tax: number } = {
    delievery: 40,
    discount: 0,
    tax: 0,
  };

  const subTotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }, [cart]);

  console.log(cart);
  return (
    <section className='border-b border-b-gray-500 py-12'>
      <div className='mx-auto w-9/10'>
        <HType2 hypens='both'>Cart</HType2>
        <HType1 className='text-center'>buy your favorite dishes</HType1>
        <div>
          <div className='mx-auto w-full max-w-120 rounded-lg bg-white p-6'>
            {cart.length === 0 && (
              <div className='flex items-stretch justify-between border-b border-dotted border-b-gray-500 py-2'>
                <div className='flex gap-4'>
                  <figure className='flex h-20 w-30 items-center justify-center overflow-hidden rounded-lg bg-gray-100'>
                    <FaCartShopping className='size-16 text-gray-300' />
                  </figure>
                  <div className='space-y-1'>
                    <div>
                      <h6 className='font-nunito font-semibold first-letter:capitalize'>
                        your cart is empty
                      </h6>
                      <p className='text-xs text-gray-500 first-letter:capitalize'>
                        start adding items
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-4'>
                  <h6 className='font-semibold'>₹0</h6>
                </div>
              </div>
            )}
            {cart.length > 0 &&
              cart.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })}

            <div className='flex items-center justify-between border-b border-dotted border-b-gray-500 py-2'>
              <h6 className='font-semibold'>Delivery</h6>
              <h6 className='font-semibold'>₹{extraCost.delievery}</h6>
            </div>
            <div className='flex items-center justify-between border-b border-dotted border-b-gray-500 py-2'>
              <h6 className='font-semibold'>Total</h6>
              <h6 className='font-semibold'>
                ₹
                {cart.length > 0
                  ? subTotal -
                    extraCost.discount +
                    extraCost.tax +
                    extraCost.delievery
                  : 0}
              </h6>
            </div>
            <div>
              <Button className='mt-4 w-full'>proceed</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Cart;
