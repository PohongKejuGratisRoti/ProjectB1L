import React from 'react'
import NavCat from '@/components/NavCat'
import SearchBar from '@/components/SearchBar'

const page = () => {
  return (
    <div className='bg-white'>
      <NavCat />
      <div className='w-full bg-white h-[10vh] flex flex-row-reverse items-center'> {/* tempat lebar untuk header */}
        <SearchBar />
        <div></div>
        <div></div>
        {/*wrapper bodi dibawah navbar*/}
        
      </div>

    </div>
  )
}

export default page