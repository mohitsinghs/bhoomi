import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Github, MoonStars, Sun } from 'react-bootstrap-icons'

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
        <Head>
          <title>
            Bhoomi | A north-indian property convertor and aggregator
          </title>
          <meta
            name='description'
            content='Bhoomi helps you convert and aggregate acres to
          north-indian units of land'
          />
        </Head>
        <header className='grid grid-cols-4 py-8 lg:px-16 px-8 bg-gray-100 dark:bg-gray-700'>
          <h1 className='col-span-3 font-bold text-gray-700 dark:text-gray-100 text-3xl'>
            {title}
          </h1>
          <div className='col-span-1 justify-self-end flex gap-4'>
            <button onClick={toggleTheme} className='text-xl'>
              {theme === 'dark' ? (
                <MoonStars size={20} className='text-gray-100' />
              ) : (
                <Sun size={20} />
              )}
            </button>
            <a
              href='https://github.com/mohitsinghs/bhoomi'
              target='_blank'
              rel='noreferrer nofollow'
              className='text-xl'
            >
              <Github
                size={20}
                className='inline text-gray-800 dark:text-gray-100'
              />
            </a>
          </div>
          <p className='col-span-3 leading-loose text-gray-500 dark:text-gray-300'>
            {desc}
          </p>
        </header>
        {children}
      </main>
    </>
  )
}
