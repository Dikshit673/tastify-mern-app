import { memo, useState } from 'react';
import { NavLink } from 'react-router';

import { LuUtensilsCrossed } from 'react-icons/lu';
import { FaHamburger } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

import { HType1 } from './ui/Headings';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='bg-prime-400/90 size-fulll sticky top-0 left-0 z-30 backdrop-blur-sm'>
      <section className='w-full'>
        <div className='mx-auto flex w-9/10 items-center justify-between py-2'>
          <div>
            <a href='' className='inline-flex items-center gap-2'>
              <HType1 tag='h5' className='text-prime-100 m-0 font-bold'>
                Tastify
              </HType1>
            </a>
          </div>
          <div className='flex items-center gap-4 text-white'>
            <nav className='hidden md:block'>
              <ul className='font-nunito flex items-center gap-4 font-bold uppercase *:cursor-pointer'>
                <li>
                  <NavLink
                    to={'/'}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? 'text-gray-500 hover:text-gray-500'
                        : isActive
                          ? 'text-prime-100'
                          : 'text-gray-300 hover:text-white'
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/menu'}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? 'text-gray-500 hover:text-gray-500'
                        : isActive
                          ? 'text-prime-100'
                          : 'text-gray-300 hover:text-white'
                    }
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/cart'}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? 'text-gray-500 hover:text-gray-500'
                        : isActive
                          ? 'text-prime-100'
                          : 'text-gray-300 hover:text-white'
                    }
                  >
                    <span className='flex items-center gap-1'>
                      cart <FaCartShopping />
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/signup'}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? 'text-gray-500 hover:text-gray-500'
                        : isActive
                          ? 'text-prime-100'
                          : 'text-gray-300 hover:text-white'
                    }
                  >
                    signup
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={'/login'}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? 'text-gray-500 hover:text-gray-500'
                        : isActive
                          ? 'text-prime-100'
                          : 'text-gray-300 hover:text-white'
                    }
                  >
                    login
                  </NavLink>
                </li>

                {/* <li>
                  <label
                    htmlFor='nav-drop-down'
                    className='flex list-none items-center'
                  >
                    <span className='mr-auto'>pages</span>
                    <IoMdArrowDropdown className='transition-transform duration-150 ease-in group-open:rotate-180' />
                  </label>
                  <input
                    type='checkbox'
                    name=''
                    id='nav-drop-down'
                    className='peer hidden'
                  />
                  <div
                    className={cn(
                      'shadow-primary absolute top-full w-30 rounded-md bg-white text-black',
                      'transition-all duration-300 ease-in',
                      'grid grid-rows-[0fr] overflow-hidden peer-checked:grid-rows-[1fr]'
                    )}
                  >
                    <div className='overflow-hidden'>
                      <ul className='flex flex-col gap-2 p-4'>
                        <li>
                          <a href=''>page 1</a>
                        </li>
                        <li>
                          <a href=''>page 2</a>
                        </li>
                        <li>
                          <a href=''>page 3</a>
                        </li>
                        <li>
                          <a href=''>page 4</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li> */}
                {/* <li>
                  <a href=''>Contact</a>
                </li> */}
              </ul>
            </nav>
            <div className='inline-block md:hidden'>
              <div
                className='grid size-8 place-items-center rounded-md transition-all duration-300 ease-in hover:bg-gray-100/50'
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <LuUtensilsCrossed className='size-5' />
                ) : (
                  <FaHamburger className='size-5' />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
});

export default Navbar;
