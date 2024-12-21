import React from 'react'
import Nav from './component/nav'
import Shoppage from './component/shoppage'
import Bar from './component/bar'
import ProductGrid from './component/product'
import Features from './component/features'
import Footer from '../component/footer'

const Page = () => {
  return (
    <div>
        <Nav/>
        <Shoppage/>
        <Bar/>
        <ProductGrid/>
        <Features/>
        <Footer/>
     
        
    </div>
  )
}

export default Page