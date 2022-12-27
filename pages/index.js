import Form from '@/components/form'
import Layout from '@/components/layout'
import { fromAcre, toSqft } from 'lib/convertor'
import React, { useEffect, useState } from 'react'

export default function LoginPage() {
  const [acre, setAcre] = useState(0)
  const [dismil, setDismil] = useState(0)
  const [dismilError, setDismilError] = useState(null)
  const [result, setResult] = useState(null)
  const [sqft, setSqft] = useState(null)

  const handleAcre = (e) => {
    if (e.target.value) {
      setAcre(parseInt(e.target.value))
    } else {
      setAcre(null)
    }
  }

  const handleDismil = (e) => {
    if (e.target.value) {
      const dismilVal = parseInt(e.target.value)
      setDismil(dismilVal)
    } else {
      setDismil(null)
    }
  }

  const fetchResult = () => {
    const currentAcre = parseInt(acre) || 0
    const currentDismil = parseInt(dismil) || 0
    const data = fromAcre(currentAcre, currentDismil)
    setResult(Object.entries(data).filter(([k, v]) => v > 0))
    setSqft(toSqft(currentAcre, currentDismil))
  }

  useEffect(() => {
    if (parseInt(dismil) > 100) {
      setDismilError('You may want to set acres for > 100')
    } else {
      setDismilError(null)
    }
  }, [dismil])

  return (
    <Layout.Page title='Bhoomi' desc='Convert acre to local units'>
      <Form.Wrapper>
        <div className='space-y-6'>
          <Form.Number onChange={handleAcre} title='Acre' />
          <Form.Number
            error={dismilError}
            onChange={handleDismil}
            title='Dismil'
          />
          <div className='flex justify-between items-center'>
            <Form.Submit onClick={fetchResult}>Calculate</Form.Submit>
          </div>
          <div className='flex justify-between items-center p-4 rounded-md border dark:border-gray-700'>
            <p className='text-sm text-center text-gray-700 dark:text-gray-200'>
              {result?.map(([k, v]) => (
                <React.Fragment key={k}>
                  <span className='text-xl font-medium'>{v}</span>
                  <span className='px-1 text-gray-600 dark:text-gray-300'>
                    {k
                      .split('')
                      .map((l, i) => (i === 0 ? l.toUpperCase() : l))
                      .join('')}
                  </span>
                </React.Fragment>
              ))}
            </p>
          </div>
          {sqft ? (
            <div className='flex justify-between items-center p-4 rounded-md border dark:border-gray-700'>
              <p className='text-sm text-center text-gray-700 dark:text-gray-200'>
                <p className='text-sm text-center text-gray-700 dark:text-gray-200'>
                  <span className='text-xl font-medium'>{sqft}</span>
                  <span className='px-1 text-gray-600 dark:text-gray-300'>
                    Sq. Ft.
                  </span>
                </p>
              </p>
            </div>
          ) : null}
        </div>
      </Form.Wrapper>
    </Layout.Page>
  )
}
