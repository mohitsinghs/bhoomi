import clsx from 'clsx'
import { ExclamationTriangleFill } from 'react-bootstrap-icons'
import Label from './label'

export default function Number({ title, error, ...props }) {
  return (
    <div className='relative'>
      <input
        type='text'
        name='number'
        id='number'
        {...props}
        className={clsx([
          error
            ? 'text-red-500 border-red-300'
            : 'text-gray-700 border-gray-400 dark:text-gray-100 dark:border-gray-600',
          'peer block dark:bg-gray-800 w-full py-2 pl-3.5 pr-1 text-sm rounded-md focus:outline-none border placeholder-transparent',
        ])}
        placeholder='5'
        {...(error && {
          'aria-invalid': 'true',
          'aria-describedby': 'number-error',
        })}
      />
      <Label htmlFor='number' error={error}>
        {title}
      </Label>
      {error && (
        <p
          className={clsx(['mt-2 text-xs text-red-500', !error && 'hidden'])}
          id='number-error'
        >
          <ExclamationTriangleFill
            className='inline-flex mr-1'
            aria-hidden='true'
          />
          {error}
        </p>
      )}
    </div>
  )
}
