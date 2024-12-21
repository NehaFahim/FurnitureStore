import React from 'react'
import Firstpage from './component/firstpage'
import Nav from '../shop/component/nav'
import Login from './component/login'
import Features from '../shop/component/features'
import Footer from '../component/footer'



const Accountpage = () => {
  return (
    <div>
        <Nav/>
        <Firstpage/>
        <Login/>
        <Features/>
        <Footer/>
    </div>
  )
}

export default Accountpage