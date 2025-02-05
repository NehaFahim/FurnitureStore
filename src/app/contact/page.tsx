import React from 'react'
import Nav from '../shop/component/nav'
import Highlight2 from './component/highlight2'
import ContactPage from './component/intouch'
import Features from '../shop/component/features'
import Footer from '../component/footer'



const Contact = () => {
  return (
    <div className=' w-full h-auto'>
        <Nav/>
        <Highlight2/>
        <ContactPage/>
        <Features/>
        <Footer/>
   
    </div>
  )
}

export default Contact