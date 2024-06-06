import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from "@/assets/footer/Frame 993.png"
import call from "@/assets/footer/call.png"
import fb from "@/assets/footer/facebook.png"
import insta from "@/assets/footer/instagram.png"
import loc from "@/assets/footer/location.png"
import sms from "@/assets/footer/sms.png"
import yt from "@/assets/footer/youtube.png"

const Footer = () => {
  return (
    <div className='bg-[#051C34] py-10 text-secondarywhite text-sm flex flex-col justify-center items-start gap-10'>
        <div className='flex justify-between items-center margin pb-14 border-b-2'>
            <div className='flex justify-center items-start gap-6 flex-col'>
                <div><Image src={logo} alt='logo'></Image></div>
                <div className='flex justify-start items-center gap-2'>
                    <Image src={loc} alt='loc'></Image>
                    <div>25566 Hc 1, Glenallen,<br />Alaska, 99588, USA</div>
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <Image src={call} alt='call'></Image>
                    <div>+603 4784 273 12</div>
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <Image src={sms} alt='sms'></Image>
                    <div>rentcars@gmail.com</div>
                </div>
            </div>
            <div className='flex justify-center items-start gap-[96px]'>
                <div className='flex justify-center items-start flex-col gap-8'>
                    <div className='text-base font-medium text-mywhite'>Our Products</div>
                    <div className='flex justify-center items-start gap-2 flex-col'>
                        <Link href={"/"}>
                            <div>Career</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Cars</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Packages</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Features</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Priceline</div>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-start flex-col gap-8'>
                    <div className='text-base font-medium text-mywhite'>Resources</div>
                    <div className='flex justify-center items-start gap-2 flex-col'>
                        <Link href={"/"}>
                            <div>Download</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Help Center</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Guides</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Partner Network</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Cruises</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Developers</div>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-start flex-col gap-8'>
                    <div className='text-base font-medium text-mywhite'>About Rentcars</div>
                    <div className='flex justify-center items-start gap-2 flex-col'>
                        <Link href={"/"}>
                            <div>Why Choose Us</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Our Story</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Investor Relations</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Press Center</div>
                        </Link>
                        <Link href={"/"}>
                            <div>Advertise</div>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-start flex-col gap-8'>
                    <div className='text-base font-medium text-mywhite'>Follow Us</div>
                    <div className='flex justify-center items-start gap-2'>
                        <Link href={"/"}>
                            <Image src={fb} alt='fb'></Image>
                        </Link>
                        <Link href={"/"}>
                            <Image src={insta} alt='insta'></Image>
                        </Link>
                        <Link href={"/"}>
                            <Image src={yt} alt='yt'></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='margin'>Copyright 2023 ・ Rentcars, All Rights Reserved</div>
    </div>
  )
}

export default Footer