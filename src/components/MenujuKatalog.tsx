'use client';
import React, { use } from 'react'
import Link from 'next/link'
import Image from 'next/image';

const MenujuKatalog = () => {
  return (
    <Link href="/catalogue">
        <div className='flex flex-row mb-4 text-xl text-white bg-black px-10 py-4 rounded-full shadow-md shadow-blue-950 hover:shadow-blue-950 hover:border-4 hover:border-blue-600 hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>
            <div className='mr-4'>Cek Katalog Kami</div>
            <Image src="/cart.png" alt='cart' width={30} height={20} />
        </div>
    </Link>
    
  )
}

export default MenujuKatalog