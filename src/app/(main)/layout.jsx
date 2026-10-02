import Header from '@/components/shared/Header'
import LatestNews from '@/components/shared/Latest'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

export default function LayoutPage({children}) {
  return (
    <div>
      <>
        <Header></Header>
        <LatestNews></LatestNews>
        <Navbar></Navbar>
        {children}
      </>
    </div>
  )
}
