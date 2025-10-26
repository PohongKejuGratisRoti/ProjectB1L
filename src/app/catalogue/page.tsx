import React from 'react'
import NavCat from '@/components/NavCat'
import SearchBar from '@/components/SearchBar'
import ProductTray from '@/components/ProductTray'
import products from "../../data/DaftarProduk.json";
import Image from 'next/image'

const page = () => {
  return (
    <div className='bg-white'>
      <NavCat />
      <div className='w-full bg-white h-[10vh] flex flex-row-reverse items-center text-black justify-evenly'> {/* tempat lebar untuk header */}
        <SearchBar />
        <ProductTray />
        
        <div>Logo Perusahaan</div>
        
      </div>
      {/*wrapper bodi dibawah navbar*/}
      <div className='w-full h-screen bg-gray-50 border border-black flex flex-row text-black'>

        <div>tes1</div>
        <div>tes2</div>
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-56 relative">
              <Image
                src={`/imagefolder/${item.image_id}.jpg`}
                alt={item.product_name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.product_name}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
        

      </div>

    </div>
  )
}

export default page