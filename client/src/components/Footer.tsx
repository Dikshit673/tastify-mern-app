import { memo } from 'react';
import { Button, HType2, Input } from './ui';
import { FaEnvelope, FaHeart, FaLocationDot, FaPhone } from 'react-icons/fa6';

const Footer = memo(() => {
  return (
    <footer className='bg-prime-400/90 font-nunito size-full backdrop-blur-sm'>
      <section className='w-full pt-12 pb-8'>
        <div className='mx-auto w-9/10'>
          <div className='mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
            <div>
              <HType2 hypens='right' className='mb-4 text-start'>
                company
              </HType2>
              <ul className='flex flex-col gap-1 text-white capitalize *:hover:text-gray-400'>
                <li>About us</li>
                <li>contact us</li>
                <li>reservation</li>
                <li>privacy policy</li>
                <li>terms & conditions</li>
              </ul>
            </div>
            <div>
              <HType2 hypens='right' className='mb-4 text-start'>
                contact
              </HType2>
              <ul className='flex flex-col gap-1 text-white capitalize *:hover:text-gray-400'>
                <li className='flex items-center gap-2'>
                  <FaLocationDot className='size-4' />
                  <span>123 Street, XYZ, ABCD</span>
                </li>
                <li className='flex items-center gap-2'>
                  <FaPhone className='size-4' />
                  <span>+01234567890</span>
                </li>
                <li className='flex items-center gap-2'>
                  <FaEnvelope className='size-4' />
                  <span>contact@info.com</span>
                </li>
              </ul>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <HType2 hypens='right' className='mb-4 text-start'>
                opening
              </HType2>
              <ul className='flex flex-col gap-1 text-white capitalize *:hover:text-gray-400'>
                <li>
                  Mon - Sat
                  <br />
                  9AM - 9PM
                </li>
                <li>
                  Sun
                  <br />
                  8AM - 8PM
                </li>
              </ul>
            </div>
            <div>
              <div className='text-black'>
                <HType2 hypens='right' className='mb-4 text-start'>
                  newsletter
                </HType2>
                <p className='mb-4 text-white'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa, obcaecati vero ipsam adipisci magni tempore.
                </p>
                <form className='flex items-center gap-2 *:first:flex-1'>
                  <Input
                    id={'newsletter-field-1'}
                    type={'text'}
                    name='newsletter'
                    label='newsletter'
                    placeholder=''
                    required={false}
                    value=''
                    handleChange={() => {}}
                  />
                  <Button>subscribe</Button>
                </form>
              </div>
            </div>
          </div>

          <div className='bg-prime-300 my-6 h-0.25 w-full'></div>
          <div className='flex items-center justify-between gap-2 px-4 text-white'>
            <div className='tracking-wider'>
              Copyright &copy;{' '}
              <span className='font-bold'>{new Date().getFullYear()}</span>{' '}
              <HType2 className='mb-0 inline-block'>Tastify</HType2>.{' '}
              <span>All rights reserved.</span>
            </div>
            <div>
              Made with{' '}
              <FaHeart className='text-prime-100 inline-block size-5' /> by{' '}
              <HType2 className='mb-0 inline-block'>sachin kumar</HType2>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
});

export default Footer;
