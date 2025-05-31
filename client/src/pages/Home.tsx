import { memo } from 'react';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Kitchen from '@/components/Kitchen';
import Booking from '@/components/Booking';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';

const Home = memo(() => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Kitchen />
      <Booking />
      <Testimonial />
      <Contact />
    </>
  );
});

export default Home;
