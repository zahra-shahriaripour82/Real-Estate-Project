import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'



export default function Layout({children}:{children:React.ReactNode}) {
    const style={minHeight:"700px"}
  return (
   <>
   <Header/>
   <div style={style}>{children}</div>
   <Footer/>
   </>
  )
} 

 