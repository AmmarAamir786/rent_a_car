import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import googleplay from "@/assets/download/image 2.png"
import apple from "@/assets/download/image 3.png"
import phone from "@/assets/download/iPhone 14 Pro Space Black Mockup.png"

const Download = () => {
  return (
    <section className='flex justify-center items-center margin mt-[100px]'>
        <div className='flex justify-center items-start gap-10 flex-col w-1/2'>
            <Heading text='DOWNLOAD'></Heading>
            <div className='flex flex-col justify-center items-start gap-5 w-[500px]'>
                <div className='text-headingblack text-5xl font-semibold leading-normal'>Download Rentcars App for <span className='text-primaryblue'>FREE</span></div>
                <div className='text-myblack'>For faster, easier booking and exclusive deals.</div>
                <div className='flex justify-start items-center'>
                    <Image src={googleplay} alt=''></Image>
                    <Image src={apple} alt=''></Image>
                </div>
            </div>
        </div>
        <div className='w-1/2 flex justify-end items-center'>
            <Image src={phone} alt='phone'></Image>
        </div>
    </section>
  )
}

export default Download