import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'react-bootstrap-icons'

export default function Page({ children, title = 'Page', desc }) {
  const [theme, setTheme] = useState(null)
  const toggleTheme = () => {
    const doc = document.documentElement.classList
    if (window.localStorage.getItem('theme') === 'dark') {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
      doc.remove('dark')
      doc.add('light')
    } else {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      doc.add('dark')
      doc.remove('light')
    }
  }

  useEffect(() => {
    if (
      window.localStorage.theme === 'dark' ||
      (!('theme' in window.localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }, [])

  return (
    <>
      <main className='z-10 p-8 min-h-screen bg-white dark:bg-gray-800 lg:w-full'>
        <header className='grid grid-cols-4 py-8 mx-auto max-w-xs'>
          <h1
            className={clsx([
              'col-span-3 text-2xl font-bold leading-loose text-gray-700 dark:text-gray-100 sm:pb-2 md:text-3xl lg:text-4xl',
            ])}
          >
            {title}
          </h1>
          <button className='col-span-1 justify-self-end' onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Moon className='text-xl text-gray-100' />
            ) : (
              <Sun className='text-xl' />
            )}
          </button>
          <p
            className={clsx([
              'col-span-3 text-lg leading-loose text-gray-500 dark:text-gray-300',
            ])}
          >
            {desc}
          </p>
        </header>
        {children}
      </main>
    </>
  )
}
