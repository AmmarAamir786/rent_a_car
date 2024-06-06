import React from 'react'
import Image from 'next/image'
import calender from "@/assets/icon2.png"
import loc from "@/assets/icon3.png"
import car from "@/assets/icon.png"
import logo1 from "@/assets/logos/Frame.png"
import logo2 from "@/assets/logos/Frame 24.png"
import logo3 from "@/assets/logos/Frame 25.png"
import logo4 from "@/assets/logos/Frame 26.png"
import logo5 from "@/assets/logos/Frame 27.png"
import logo6 from "@/assets/logos/Frame 28.png"
import Heading from './Heading'

const About = () => {
  return (
    <main className='h-[800px] flex flex-col justify-center items-center gap-[100px] margin mt-[10px]'>
        <section className='flex flex-col justify-center items-center gap-20'>
            <div className='flex justify-center items-center gap-8 flex-col'>
                <Heading text='How It Works'></Heading>
                <div className='text-myblack font-medium text-4xl'>Rent with following 3 simple steps</div>
            </div>
            <div className='flex justify-center items-center gap-[128px]'>
                <div className='flex justify-center items-center gap-10 flex-col w-[200px] text-center'>
                    <div><Image src={loc} alt='loc'></Image></div>
                    <div className='flex justify-center items-center gap-6 flex-col'>
                        <div className='text-headingblack font-medium text-xl'>Choose Location</div>
                        <div className='text-secondaryblack font-medium text-sm'>Choose your location and find your best car</div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-10 flex-col w-[200px] text-center'>
                    <div><Image src={calender} alt='loc'></Image></div>
                    <div className='flex justify-center items-center gap-6 flex-col'>
                        <div className='text-headingblack font-medium text-xl'>Pick-Up Date</div>
                        <div className='text-secondaryblack font-medium text-sm'>Select your pick up date and time to book your car</div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-10 flex-col w-[200px] text-center'>
                    <div><Image src={car} alt='loc'></Image></div>
                    <div className='flex justify-center items-center gap-6 flex-col'>
                        <div className='text-headingblack font-medium text-xl'>Book Your Car</div>
                        <div className='text-secondaryblack font-medium text-sm'>Book your car and we will deliver it directly to you</div>
                    </div>
                </div>
            </div>
        </section>
        <section className='flex justify-center items-center gap-10 flex-wrap'>
            <Image src={logo1} alt='logo1'></Image>
            <Image src={logo2} alt='logo2'></Image>
            <Image src={logo4} alt='logo4'></Image>
            <Image src={logo6} alt='logo6'></Image>
            <Image src={logo5} alt='logo5'></Image>
            <Image src={logo3} alt='logo3'></Image>
        </section>
    </main>
  )
}

export default About