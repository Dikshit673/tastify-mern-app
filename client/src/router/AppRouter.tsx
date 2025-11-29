import { createBrowserRouter, RouterProvider } from 'react-router';

// import { Private, Public } from '@/guards';
import MainLayout from '@/layouts/MainLayout';

import Page404 from '@/pages/Page404';
import Error from '@/pages/Error';

import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Cart from '@/pages/Cart';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';

// import Profile from '@/pages/Profile';

const router =createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: '/menu',
          element: <Menu />,
          errorElement: <Error />,
        },
        {
          path: '/cart',
          element: <Cart />,
          errorElement: <Error />,
        },
        {
          path: '/signup',
          element: <Signup />,
          errorElement: <Error />,
        },
        {
          path: '/login',
          element: <Login />,
          errorElement: <Error />,
        },
        {
          path: '*',
          element: <Page404 />,
        },
      ],
      //   children: [
      //     {
      //       element: <Public />,
      //       errorElement: <Error />,
      //       children: [
      //         {
      //           path: '/',
      //           element: <Landing />,
      //           errorElement: <Error />,
      //         },
      //         {
      //           path: '/login',
      //           element: <Login />,
      //           errorElement: <Error />,
      //         },
      //         {
      //           path: '/signup',
      //           element: <Signup />,
      //           errorElement: <Error />,
      //         },
      //       ],
      //     },
      //     {
      //       element: <Private />,
      //       errorElement: <Error />,
      //       children: [
      //         {
      //           path: '/profile',
      //           element: <Profile />,
      //           errorElement: <Error />,
      //         },
      //       ],
      //     },
      //     {
      //       path: '*',
      //       element: <Page404 />,
      //     },
      //   ],
    },
  ]);


const AppRouter=()=>{
  return(
    <RouterProvider router={router} />
  )
}

export default AppRouter;
