"use client";
import React from 'react'
import Link from 'next/link'

const ProductTray = () => {
  return (
    <div className='flex flex-row-reverse text-black gap-3.5'>
        <div>Consumable</div>
        <div>Patient care</div>
        <div>Oxygen</div>
        <div>Electronics</div>
    </div>
  )
}

export default ProductTray