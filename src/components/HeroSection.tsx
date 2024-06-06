import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import playstore from "@/assets/image 2.png"
import applestore from "@/assets/image 3.png"
import hero from "@/assets/car 2 1.png"
import Search from './Search'
import frame from "@/assets/Frame.png"

const HeroSection = () => {
  return (
    <section className=' mt-[120px] margin'>

        <div className='flex justify-center items-center'>          
         
            <div className='w-1/2'>
                <div className='w-[400px] flex flex-col justify-center items-start gap-8'>
                    <div className='text-5xl font-semibold text-headingblack leading-snug'>Find, book and rent a car <span className='text-primaryblue'>Easily</span></div>
                    <div className='text-lg text-myblack'>Get a car wherever and whenever you need it with your IOS and Android device.</div>
                    <div className='flex justify-start items-center gap-3'>
                        <Link href={"/"}>
                            <Image src={playstore} alt='pics'></Image>
                        </Link>
                        <Link href={"/"}>
                            <Image src={applestore} alt='pics'></Image>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='w-1/2 flex justify-end items-center'>
                <Image src={hero} alt='hero' className='absolute -right-[40px] scale-90'></Image>
                <Image src={frame} alt='frame' className='absolute right-0 top-0 -z-50'></Image>
            </div>

        </div>

        <Search></Search>

    </section>
  )
}

export default HeroSection