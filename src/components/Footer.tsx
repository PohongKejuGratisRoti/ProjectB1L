"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-auto pb-10 bg-black pt-8 flex flex-col w-full'>
      <div className='flex flex-row justify-between gap-28 px-20 '>
        <div className='flex-col flex items-center'>
        <Image src="/logoperusahaan.png" width={125}
      height={125}
      alt="Picture of the author" className="grayscale"/>
      <div className='font-medium text-xl'>PT Surya Misfalah</div>
      <div className='mt-7'>
        <Image
          src="/next.svg"
          alt="Next"
          width={150}
          height={150}
          className="invert"
        />
      </div>
      </div>
      
      <div className='flex-col flex'>
        <div className='font-bold'>PT Surya Misfalah</div>
        <div>Akan diisi alamat perusahaan</div>
        <div>Alamat Perusahaan yang lebih spesifik</div>
        <div className='flex items-start flex-col mt-4 gap-0.5 text-white '>
          <div>email</div>
          <div>No telepon</div>
        </div>

        <div className="flex gap-4 mt-5">
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        className="text-xl hover:text-blue-500 transition"
      >
        <FaTwitter />
      </a>

      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        className="text-xl hover:text-pink-500 transition"
      >
        <FaInstagram />
      </a>

      <a
        href="https://github.com/yourprofile"
        target="_blank"
        className="text-xl hover:text-gray-400 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://facebook.com/yourprofile"
        target="_blank"
        className="text-xl hover:text-blue-600 transition"
      >
        <FaFacebook />
      </a>
    </div>
      </div>
        
      <div className='flex-col'>
        <div>Company</div>
        <div className='mt-10 gap-2 flex flex-col text-white'>
          <Link href="/" className='relative group'>
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="relative group">
            Tentang Kami
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="/catalogue" className="relative group">
            Katalog
            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-white transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
        </div>
      </div>

      <div className='flex-col'>
        <div>Services</div>
      </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} PT Surya Misfalah. All rights reserved.
      </div>
    </div>
  )
}

export default Footer