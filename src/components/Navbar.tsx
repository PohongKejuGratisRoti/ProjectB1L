"use client";
import React from 'react'
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white px-6 py-3 font-semibold z-20">
      {/* Links */}
      <div className="space-x-6 justify-center flex">
        <Link href="/" className='relative group'>
          Home
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/about" className="relative group">
          Tentang Kami
          <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link href="/socials" className="relative group">
          Socials
          <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
        <Link href="/catalogue" className="relative group">
          Katalog
          <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
        </Link>
      </div>

    </nav>
  )
}

export default Navbar