import React from 'react'
import Headere from './Headere';
import Footer from './Footer';

function Layout({children}) {
  return (
    <div>
        <Headere/>
          {children}
        <Footer/>
    </div>
  )
}

export default Layout