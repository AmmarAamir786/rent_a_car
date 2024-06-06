import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import arrow from "@/assets/icons/arrow-right.png"

const SecondaryButton = ({text}: {text: string}) => {
  return (
    <main className='rounded-lg px-10 py-2 bg-primaryblue w-full flex justify-center items-center gap-2'>
            <div className='font-medium text-mywhite text-sm'>{text}</div>
            <Image src={arrow} alt='arrow'></Image>
    </main>
  )
}

export default SecondaryButton