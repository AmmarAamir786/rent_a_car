import React from 'react'
import Heading from './Heading'
import EmblaCarousel from './carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import q1 from "@/assets/testimonials/“ (1).png"
import q2 from "@/assets/testimonials/“.png"
import Image from 'next/image'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Testimonials = () => {
  return (
    <section className=' bg-[#F7FBFF] flex flex-col justify-center items-center gap-10 py-20 relative'>
        <div className='margin flex flex-col justify-center items-center gap-10'>
            <Heading text='TESTIMONIALS'></Heading>
            <div className='text-myblack text-5xl font-medium'>What peole say about us?</div>
        </div>
        <div className='flex justify-center items-center margin z-50'>       
            <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
        </div>
        <Image src={q1} alt='q1' className='absolute top-[400px] left-[100px]'></Image>
        <Image src={q2} alt='q2' className='absolute top-0 right-[100px]'></Image>
    </section>
  )
}

export default Testimonials