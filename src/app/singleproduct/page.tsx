import Nav from '@/app/shop/component/nav'
import React from 'react'
import Startline from './component/startline'
import ProductDetail from './component/sofa'
import Details from './component/description'
import Relate from './component/relateproduct'
import Footer from '../component/footer'

const Singleproduct = () => {
  return (
    <div>
        <Nav/>

        <Startline/>

        <ProductDetail/>

        <Details/>
        
        <br />
        <br />
        <br /><br /><br />
        <br /><br />
        <br />
        <br /><br />
        <br /><br /><br /><br /><br /><br />
        <br />
        <br />
        <hr />
        <Relate/>
         <Footer/>
        
    </div>
  )
}

export default Singleproduct