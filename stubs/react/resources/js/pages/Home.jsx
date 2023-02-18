import React from 'react';
import { Link } from 'react-router-dom';
import Head from '@/components/Head';

function Home() {
  return (
    <>
      <Head title="Home" />
      <div className="relative h-screen w-full">
        <div className="h-full w-full">
          <img
            className="h-full w-full object-cover"
            src="https://picsum.photos/1024/720?grayscale"
            alt="Random Background"
          />
          <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-y-2 bg-indigo-700 bg-opacity-50 p-8 backdrop-blur">
            <h2 className="text-4xl font-bold text-white">LaraSPA</h2>
            <p className="text-center text-lg font-light text-white">
              Laravel REST API React Scaffolding with Authentication
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                to="/login"
                className="rounded-md px-4 py-2 font-normal uppercase text-white ring-2 ring-white hover:bg-indigo-700 hover:bg-opacity-50"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-md px-4 py-2 font-normal uppercase text-white ring-2 ring-white hover:bg-indigo-700 hover:bg-opacity-50"
              >
                Register
              </Link>
              <Link
                to="/dashboard"
                className="rounded-md px-4 py-2 font-normal uppercase text-white ring-2 ring-white hover:bg-indigo-700 hover:bg-opacity-50"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
