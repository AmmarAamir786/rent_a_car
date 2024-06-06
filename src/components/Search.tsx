import React from 'react'
import Image from 'next/image'
import location from "@/assets/location.png"
import calender from "@/assets/calendar.png"
import PrimaryButton from './Buttons/PrimaryButton'

const Search = () => {
  return (
    <main className='flex justify-between items-center gap-[50px] p-3 rounded-xl shadow-2xl mt-[150px] bg-mywhite z-50'>
        <div className='flex justify-center items-center gap-4'>
            <div><Image src={location} alt='location'></Image></div>
            <div className=' flex flex-col justify-center items-start'>
                <div className='text-myblack font-medium'>Location</div>
                <div className='text-secondaryblack'>Search your location</div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <div><Image src={calender} alt='location'></Image></div>
            <div className=' flex flex-col justify-center items-start'>
                <div className='text-myblack font-medium'>Pickup Date</div>
                <div className='text-secondaryblack'>Tue 15 Feb, 09:00</div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <div><Image src={calender} alt='location'></Image></div>
            <div className=' flex flex-col justify-center items-start'>
                <div className='text-myblack font-medium'>Return Date</div>
                <div className='text-secondaryblack'>Tue 15 Feb, 09:00</div>
            </div>
        </div>
        <PrimaryButton text='Search'></PrimaryButton>
    </main>
  )
}

export default Search