import { createBrowserRouter } from 'react-router';

// import { Private, Public } from '@/guards';
import MainLayout from '@/layouts/MainLayout';
import Page404 from '@/pages/Page404';
import Error from '@/pages/Error';

import Home from '@/pages/Home';
import Menu from '@/pages/Menu';
import Cart from '@/pages/Cart';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';

// import Profile from '@/pages/Profile';

export const CreateAppRouter = () => {
  return createBrowserRouter([
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
          element: <SignUp />,
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
};

export default CreateAppRouter;
