import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import { memo } from 'react';
import { Outlet } from 'react-router';

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
