import React from 'react'
import Nav from './component/nav'
import Shoppage from './component/shoppage'
import ProductGrid from './component/product'
import Features from './component/features'
import Footer from '../component/footer'
// import Bar from './component/bar'

const Page = () => {
  return (
    <div className='w-full h-auto'>
        <Nav/>
        <Shoppage/>
        {/* <Bar/> */}
        <ProductGrid/>
        <Features/>
        <Footer/>
     
        
    </div>
  )
}

export default Page









