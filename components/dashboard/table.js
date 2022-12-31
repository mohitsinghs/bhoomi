import { Trash } from 'react-bootstrap-icons'

function Table({ children }) {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-4 px-8 lg:px-16'>
      {children}
    </div>
  )
}

function Card({ acre, dismil, onDelete }) {
  return (
    <div className='relative rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-6 py-5 shadow-sm flex items-center space-x-3'>
      <div className='flex-1 min-w-0'>
        <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
          {acre} Acre
        </p>
        <p className='text-sm text-gray-500 dark:text-gray-400 truncate'>
          {dismil} Dismil
        </p>
      </div>
      <button
        className='flex-shrink-0 cursor-pointer flex flex-col items-center justify-center'
        onClick={onDelete}
      >
        <Trash size={24} className='text-gray-500 dark:text-gray-400' />
      </button>
    </div>
  )
}

Table.Card = Card

export default Table
