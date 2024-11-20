import {  ReactElement } from 'react'
import { Header } from '../Components/header'
import { Footer } from '../Components/Footer'

interface BaseLayoutProps {

    children: ReactElement
}

export const BaseLayout = ({children} : BaseLayoutProps) :ReactElement => {


  return (
    <div className=''>
        <Header/>
        {children}
        <Footer/>
    </div>
    
  )
}