import React from 'react';
import { twMerge } from 'tailwind-merge';
import Spinner from './Spinner';

function Button({
  children,
  type = 'button',
  className = '',
  disabled = false,
  isLoading = false,
}) {
  return (
    <button
      className={twMerge(
        'rounded-md bg-blue-600 px-4 py-2 uppercase text-white hover:bg-blue-700 focus:bg-blue-500 disabled:bg-gray-400',
        className
      )}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled || isLoading}
    >
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 w-full">
            <div className="flex items-center justify-center">
              <Spinner />
            </div>
          </div>
        )}
        <span className={isLoading ? 'opacity-0' : 'opacity-100'}>{children}</span>
      </div>
    </button>
  );
}

export default Button;
