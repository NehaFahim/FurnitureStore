import React from 'react'
import Nav from '../shop/component/nav'
import Blogpage from './component/blogpage'
import Blogging from './component/blogging'

const Blog = () => {
  return (
    <div className=' w-full h-auto'>
        <Nav/>
        <Blogpage/>
        <Blogging/>
    </div>
  )
}

export default Blog