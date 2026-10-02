
import Navbar from '@/components/shared/Navbar'
import React from 'react'

export default function LayoutPage({children}) {
  return (
    <div>
      <>
        <Navbar></Navbar>
        {children}
      </>

    </div>
  )
}
