import React from 'react'
import Page from './component/cart1'
import Highlight2 from './component/highlight'
import Footer from '../component/footer'
import Nav from '../shop/component/nav'
import Features from '../shop/component/features'


const Cartpage = () => {
  return (
    <div className='w-full h-auto'>
        <Nav/>
        <Highlight2/>
        <Page/>
        <Features/>
        <Footer/>
    
    </div>
  )
}

export default Cartpage