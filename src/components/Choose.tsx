import React from 'react'
import Image from 'next/image'
import audi from "@/assets/Audi 1.png"
import logo from "@/assets/Vector.png"
import Heading from './Heading'
import icon1 from "@/assets/choose/icon.png"
import icon2 from "@/assets/choose/icon2.png"
import icon3 from "@/assets/choose/icon3.png"
import icon4 from "@/assets/choose/icon4.png"

const Choose = () => {
  return (
    <main className='h-[800] flex items-center overflow-hidden py-20 relative'>
        <div className=' w-1/2'>
            <Image src={audi} alt='audi' className='z-50'></Image>
            <Image src={logo} alt="logo" className='absolute top-[90px] -z-40'></Image>
        </div>
        <div className='w-1/2 pr-[100px] flex flex-col gap-8 justify-center items-start'>
            <div><Heading text='WHY CHOOSE US?'></Heading></div>
            <div className='text-4xl text-headingblack'>We offer the best experience with our rental deals</div>
            <div className='flex justify-center items-start gap-10 flex-col'>
                <div className='flex justify-start items-center gap-6'>
                    <div><Image src={icon1} alt='icon1'></Image></div>
                    <div className='flex flex-col justify-center items-start gap-5 w-[325px]'>
                        <div className='text-headingblack text-xl font-medium'>Best Price Guaranteed</div>
                        <div className='text-secondaryblack'>Find a lower price? We will refund you 100% of the difference.</div>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-6'>
                    <div><Image src={icon2} alt='icon2'></Image></div>
                    <div className='flex flex-col justify-center items-start gap-5 w-[325px]'>
                        <div className='text-headingblack text-xl font-medium'>Experience Driver</div>
                        <div className='text-secondaryblack'>Unable To Drive? No need to worry, we have many experienced driver for you.</div>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-6'>
                    <div><Image src={icon3} alt='icon3'></Image></div>
                    <div className='flex flex-col justify-center items-start gap-5 w-[325px]'>
                        <div className='text-headingblack text-xl font-medium'>24Hr Car Delivery</div>
                        <div className='text-secondaryblack'>Book your car anytime and we will deliver it directly to you.</div>
                    </div>
                </div>
                <div className='flex justify-start items-center gap-6'>
                    <div><Image src={icon4} alt='icon4'></Image></div>
                    <div className='flex flex-col justify-center items-start gap-5 w-[325px]'>
                        <div className='text-headingblack text-xl font-medium'>24/7 Technical Support</div>
                        <div className='text-secondaryblack'>Have a question? Contact Rentcars support any time when you have problem.</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Choose