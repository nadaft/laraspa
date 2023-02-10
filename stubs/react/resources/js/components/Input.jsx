import React, { useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Input = ({
  label,
  name,
  value,
  type = 'text',
  placeholder = undefined,
  required = false,
  size = 'sm',
  isFocused = false,
  handleChange,
  errorText = '',
  disabled = false,
}) => {
  const input = useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <div className='grid gap-y-1'>
      <label
        className={
          twMerge(
            'font-normal text-gray-800',
            errorText ? 'text-red-600' : '',
            disabled ? 'text-gray-400' : '',
          )
        }
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        ref={input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={
          twMerge(
            'relative block disabled:text-gray-400 w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:border-indigo-500 hover:border-gray-400 focus:outline-none focus:z-10 focus:ring-indigo-500',
            `text-${size}`,
            errorText ? 'border-red-600 focus:border-red-600 focus:ring-red-600' : ''
          )
        }
        required={required}
        disabled={disabled}
        onChange={(e) => handleChange(e)}
      />
      {errorText && <span className="text-sm text-red-600 ">{errorText}</span>}
    </div>
  )
}

export default Input
