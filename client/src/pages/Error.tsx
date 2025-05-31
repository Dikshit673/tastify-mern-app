import { memo } from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router';

const Error = memo(() => {
  const error = useRouteError();

  return (
    <section className='border border-gray-500 py-12'>
      <div className='mx-auto flex w-9/10 items-center justify-center'>
        <div className='rounded-lg bg-white p-8 text-center text-red-600'>
          <h1 className='text-xl font-bold'>🚀Oops!</h1>
          <p>Something went wrong while loading this page.</p>
          <pre className='mt-2 text-sm text-wrap text-gray-700'>
            {isRouteErrorResponse(error)
              ? `${error.status} ${error.statusText}`
              : (error as Error)?.message}
          </pre>
        </div>
      </div>
    </section>
  );
});
export default Error;
