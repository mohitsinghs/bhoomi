export default function Stats({ result, sqft }) {
  return (
    <div className='pb-8 lg:px-16 px-8 bg-gray-100 dark:bg-gray-700'>
      <dl className='grid grid-cols-2 gap-5 lg:grid-cols-5'>
        {result.map((item, idx) => (
          <div
            key={idx}
            className='px-4 py-5 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden sm:p-6'
          >
            <dt className='text-sm font-medium text-gray-500 dark:text-gray-400 truncate'>
              {item[0]}
            </dt>
            <dd className='mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100'>
              {item[1]}
            </dd>
          </div>
        ))}
        {sqft ? (
          <div className='px-4 py-5 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden sm:p-6 col-span-2 lg:col-span-1'>
            <dt className='text-sm font-medium text-gray-500 dark:text-gray-400 truncate'>
              Sq. Ft.
            </dt>
            <dd className='mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100'>
              {sqft}
            </dd>
          </div>
        ) : null}
      </dl>
    </div>
  )
}
