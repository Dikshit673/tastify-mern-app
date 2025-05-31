import { memo } from 'react';
import { HType1, HType2 } from '@/components/ui';
import { MenuArr } from './data';
import { MenuItem } from './components/MenuItem';

const Menu = memo(() => {
  return (
    <section className='border-b border-b-gray-500 py-12'>
      <div className='mx-auto w-9/10'>
        <HType2 hypens='both'>menu</HType2>
        <HType1 className='text-center'>our menu</HType1>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {MenuArr.map((menu) => {
            return <MenuItem key={menu.id} item={menu} />;
          })}
        </div>
      </div>
    </section>
  );
});

export default Menu;
