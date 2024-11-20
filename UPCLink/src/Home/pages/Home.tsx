import { ReactElement } from 'react'
import { GrapComponent } from '../components/Graph'

export const HomePage = () :ReactElement => {


  return (
      <div className=' overflow-hidden bg-secondary p-4 space-y-4'>
        <span className='text-2xl font-extrabold text-primary '>Conoce la RED UPC</span>
        <div className='rounded-md overflow-hidden'>
          <GrapComponent/>

        </div>
      </div>
  )
}