"use client"
import Image from 'next/image'
import React from 'react'
import userPic from '@/assets/user.png'
import Navlink from './Navlink'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'



export default function Navbar() {


  const { data: session,isPending } = authClient.useSession()
  const user = session?.user;
  console.log(user,'user')


  return (
    <div className='flex justify-between container mx-auto pt-10'>
      <div></div>
      <ul className='flex gap-3 text-[#706F6F]'>
        <li><Navlink href={'/'}>Home</Navlink></li>
        <li><Navlink href={'/about'}>About</Navlink></li>
        <li><Navlink href={'/career'}>Career</Navlink></li>
      </ul>
      {isPending ? (<span className="loading loading-spinner loading-xl"></span>) :
        user ? (<div className='flex gap-2 items-center'>
        <h3>Hello {user.name}</h3>
        <Image src={userPic} alt='userPic' height={40} width={40}></Image>
        <button className='btn btn-info' onClick={async()=>await authClient.signOut()}>LogOut</button>
      </div>) :
        <button className='btn btn-info'>
          <Link href={"/login"}>LogIn</Link>
        </button>}
    </div>
  )
}
