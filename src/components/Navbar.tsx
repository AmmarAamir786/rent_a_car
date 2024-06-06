import React from 'react'
import Image from 'next/image'
import logo from "@/assets/Frame 993.png"
import Link from 'next/link'
import PrimaryButton from './Buttons/PrimaryButton'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center pt-10 margin'>
        <div>
            <Image src={logo } alt='logo'></Image>
        </div>
        <div className='flex justify-center items-center gap-10'>
            <Link href={"/"}>
                <div className='text-myblack font-medium'>Become A Renter</div>
            </Link>
            <Link href={"/"}>
                <div className='text-myblack font-medium'>Rental Deals</div>
            </Link>
            <Link href={"/"}>
                <div className='text-myblack font-medium'>How It Works</div>
            </Link>
            <Link href={"/"}>
                <div className='text-myblack font-medium'>Why Choose Us</div>
            </Link>
        </div>
        <div className='flex justify-center items-center gap-6'>
            <Link href={"/"}>
                <div>Sign In</div>
            </Link>
            <PrimaryButton text='Sign Up'></PrimaryButton>
        </div>
    </header>
  )
}

export default Navbar