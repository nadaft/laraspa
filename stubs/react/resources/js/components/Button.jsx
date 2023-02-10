import React from 'react'
import { twMerge } from 'tailwind-merge'
import Spinner from './Spinner'

const Button = ({
  children,
  type = 'button',
  className = '',
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      className={
        twMerge(
          'bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:bg-blue-500 uppercase rounded-md disabled:bg-gray-400',
          className
        )
      }
      type={type}
      disabled={disabled || isLoading}
    >
      <div className='relative'>
        {isLoading &&
          <div className='absolute inset-0 w-full'>
            <div className='flex items-center justify-center'>
              <Spinner />
            </div>
          </div>
        }
        <span className={isLoading ? 'opacity-0' : 'opacity-100'}>{children}</span>
      </div>
    </button>
  )
}

export default Button
