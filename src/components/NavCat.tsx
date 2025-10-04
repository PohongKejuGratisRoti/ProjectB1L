"use client";
import React from 'react'
import Link from 'next/link'
const NavCat = () => {
  return (
    <div className='text-xs flex justify-end font-light mr-2.5 bg-black w-full'>
      <Link href="/home"> <div className='mx-1'>Home</div></Link>
      <Link href="/about"> <div className='mx-1'>Tentang Kami</div></Link>
    </div>
  )
}

export default NavCat 