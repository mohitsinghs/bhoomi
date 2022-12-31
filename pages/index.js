import Stats from '@/components/dashboard/stats'
import Table from '@/components/dashboard/table'
import Form from '@/components/form'
import Layout from '@/components/layout'
import { fromAcre, toSqft } from 'lib/convertor'
import { useEffect, useState } from 'react'

const defaultResult = [
  ['Dhur', 0],
  ['Dhurki', 0],
  ['Kattha', 0],
  ['Bigha', 0],
]

const floatRegex = /^\d*?\.?\d*?$/

export default function HomePage() {
  const [acre, setAcre] = useState('')
  const [dismil, setDismil] = useState('')
  const [lands, setLands] = useState([])
  const [dismilError, setDismilError] = useState(null)
  const [result, setResult] = useState(defaultResult)
  const [sqft, setSqft] = useState(0)

  const handleAcre = (e) => {
    const value = parseFloat(e.target.value)
    if (typeof value === 'number' || !Number.isNaN(value)) {
      setAcre(floatRegex.test(e.target.value) ? e.target.value : value)
    }
  }

  const handleDismil = (e) => {
    const value = parseFloat(e.target.value)
    if (typeof value === 'number' || !Number.isNaN(value)) {
      setDismil(floatRegex.test(e.target.value) ? e.target.value : value)
    }
  }

  const addToList = () => {
    if (acre > 0 || dismil > 0) {
      setLands([...lands, [parseFloat(acre) || 0, parseFloat(dismil) || 0]])
    }
    setAcre('')
    setDismil('')
  }

  const deleteLand = (idx) => {
    const newLands = [...lands]
    newLands.splice(idx, 1)
    setLands(newLands)
  }

  useEffect(() => {
    const [totalAcre, totalDismil] = lands.reduce(
      (sum, land) => [land[0] + sum[0], land[1] + sum[1]],
      [0, 0]
    )
    console.log({ lands, totalAcre, totalDismil })
    const parsedAcre = parseFloat(totalAcre)
    const parsedDismil = parseFloat(totalDismil)
    const local = fromAcre(parsedAcre, parsedDismil)
    setResult(Object.entries(local).filter(([k, v]) => v > 0))
    setSqft(toSqft(parsedAcre, parsedDismil))
  }, [lands])

  useEffect(() => {
    if (parseFloat(dismil) > 100) {
      setDismilError('You may want to set acres for > 100')
    } else {
      setDismilError(null)
    }
  }, [dismil])

  return (
    <Layout.Page title='Bhoomi' desc='Convert acre to local units'>
      <Stats result={result.length ? result : defaultResult} sqft={sqft} />
      <div className='flex flex-col justify-end lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0 lg:px-16 px-8 py-8 mx-auto'>
        <div className='flex flex-row space-x-4'>
          <Form.Number onChange={handleAcre} title='Acre' value={acre} />
          <Form.Number
            value={dismil}
            error={dismilError}
            onChange={handleDismil}
            title='Dismil'
          />
        </div>

        <div className='flex justify-between items-start'>
          <Form.Submit onClick={addToList}>Add to List</Form.Submit>
        </div>
      </div>
      <Table>
        {lands.map((land, idx) => (
          <Table.Card
            key={idx}
            acre={land[0]}
            dismil={land[1]}
            onDelete={() => deleteLand(idx)}
          />
        ))}
      </Table>
    </Layout.Page>
  )
}
