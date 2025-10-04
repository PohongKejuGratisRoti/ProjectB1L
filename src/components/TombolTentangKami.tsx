"use client";
import React, { use } from 'react'
import Link from 'next/link'


const TombolTentangKami = () => {
  return (
    <div>
        <Link href="/about">
            <button className="text-xl bg-black px-10 py-4 rounded-full shadow-md shadow-blue-950 hover:shadow-blue-950 hover:border-4 hover:border-blue-600 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
            Selengkapnya tentang kami →
          </button>
        </Link>
    </div>
              

  )
}

export default TombolTentangKami