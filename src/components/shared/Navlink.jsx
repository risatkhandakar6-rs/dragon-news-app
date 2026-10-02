"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navlink({ href, children }) {
  const pathName = usePathname();
  const isActive = href === pathName;
  return (
    <div>
      <Link href={href}
        className={`${isActive? 'border-b-4 border-blue-300' : ''}`}
      >{children}</Link>
    </div>
  )
}
