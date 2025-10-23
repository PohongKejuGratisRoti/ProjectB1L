import React from 'react'
import NavCat from '@/components/NavCat'
import SearchBar from '@/components/SearchBar'
import ProductTray from '@/components/ProductTray'

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
        

      </div>

    </div>
  )
}

export default page