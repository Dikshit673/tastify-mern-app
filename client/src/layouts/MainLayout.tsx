import { memo } from 'react';
import { Outlet } from 'react-router';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ScrollToTop from '@/components/ScrollToTop';

const MainLayout = memo(() => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className='bg-prime-300 w-full'>
        <Outlet />
        <BackToTop />
      </main>
      <Footer />
    </>
  );
});

export default MainLayout;
