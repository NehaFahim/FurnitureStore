import React from 'react'
import Header from './component/navline'
import HeroSection from './component/herosection'
import Sidetableandsofa from './component/stable'
import TopPicks from './component/picks'
import AsgaardSofa from './component/asgaardsofa'
import BlogSection from './component/blog'
import InstagramSection from './component/insta'
import Footer from './component/footer'
import Head from 'next/head'


 const Page = () => {
  return (
    <div className='w-full h-auto'>
      <Head>
        <meta name="Furniture store" content="This my E-commerce website." />
      </Head>
      <Header/>
      <HeroSection/>

        {/* sideTable 2nd components */}
      <Sidetableandsofa/>
      {/* toppicks 3rd component */}
      <TopPicks />
       {/* Asgaard sofa 4th component */}
      <AsgaardSofa />
      {/* BlogSection 5th component */}
      <BlogSection/>
       {/* InstagramSection 6th component */}
      <InstagramSection/>
      {/* Footer 7th component */}
      <Footer/>
    </div>
  )
}

export default Page;


