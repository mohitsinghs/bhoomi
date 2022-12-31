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
      <main className='z-10 min-h-screen bg-white dark:bg-gray-800 w-full'>
        <header className='grid grid-cols-4 py-8 lg:px-16 px-8 bg-gray-100 dark:bg-gray-700'>
          <h1 className='col-span-3 font-bold text-gray-700 dark:text-gray-100 text-3xl'>
            {title}
          </h1>
          <button className='col-span-1 justify-self-end' onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Moon className='text-xl text-gray-100' />
            ) : (
              <Sun className='text-xl' />
            )}
          </button>
          <p className='col-span-3 text-gray-500 dark:text-gray-300'>{desc}</p>
        </header>
        {children}
      </main>
    </>
  )
}
