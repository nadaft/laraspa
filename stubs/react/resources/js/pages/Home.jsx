import React from 'react';
import Head from '@/components/Head';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Head title='Home' />
      <div className='relative w-full h-screen'>
        <div className='w-full h-full'>
          <img className='object-cover w-full h-full' src='https://picsum.photos/1024/720?grayscale' alt='Random Background' />
          <div className='absolute inset-0 flex flex-col items-center justify-center w-full h-full p-8 bg-indigo-700 bg-opacity-50 gap-y-2 backdrop-blur'>
            <h2 className='text-4xl font-bold text-white'>LaraSPA</h2>
            <p className='text-lg font-light text-center text-white'>Laravel REST API React Scaffolding with Authentication</p>
            <div className='flex gap-4 mt-6'>
              <Link to={'/login'} className='px-4 py-2 font-normal text-white uppercase rounded-md ring-2 ring-white hover:bg-indigo-700 hover:bg-opacity-50'>Login</Link>
              <Link to={'/register'} className='px-4 py-2 font-normal text-white uppercase rounded-md ring-2 ring-white hover:bg-indigo-700 hover:bg-opacity-50'>Register</Link>
              <Link to={'/dashboard'} className='px-4 py-2 font-normal text-white uppercase rounded-md ring-2 ring-white hover:bg-indigo-700 hover:bg-opacity-50'>Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
