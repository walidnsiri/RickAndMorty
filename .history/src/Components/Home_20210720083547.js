import React from 'react'
import {
    Content,
    Footer,
    Nav
  } from './index'


const Home = () => {
    return (
        <div>
        <Nav/>
        <div className="wrapper">
          <div className="body">
            <Content/>
          </div>
          <Footer/>
        </div>
      </div>
    )
}

export default Home
