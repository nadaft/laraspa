import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { store } from '@/store';

const GuestLayout = () => {
  const state = store.getState();

  const { token } = state.auth;

  if (token) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div className='flex h-screen'>
      <div className='flex-col items-center justify-center flex-grow hidden p-4 bg-blue-700 gap-y-2 md:flex'>
        <h2 className='text-4xl font-bold text-white'>LaraSPA</h2>
        <p className='text-lg font-light text-center text-white'>Laravel REST API React Scaffolding with Authentication</p>
      </div>
      <div className='w-full md:w-[480px]'><Outlet /></div>
    </div>
  )
}

export default GuestLayout
