export default function Submit({ children, ...props }) {
  return (
    <button
      className='flex justify-center px-6 py-2 w-full text-sm font-medium text-white bg-gray-600 rounded-md border border-transparent shadow-sm sm:px-8 hover:bg-gray-700 hover:-translate-y-0.5 transition-all duration-200 ease-in dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none'
      {...props}
    >
      {children}
    </button>
  )
}
