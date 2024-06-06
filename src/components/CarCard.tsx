import React from 'react'
import Image from 'next/image'
import car from "@/assets/cars/Audi 1.png"
import star from "@/assets/icons/Star 1.png"
import person from "@/assets/icons/user.png"
import gear from "@/assets/icons/Frame.png"
import air from "@/assets/icons/Frame (1).png"
import door from "@/assets/icons/Frame (2).png"
import SecondaryButton from './Buttons/SecondaryButton'
import Link from 'next/link'

const CarCard = ({id, image, name, stars, reviews, passengers, drive, doors, rent, link} : {id: string, image: any, name: string, stars: string, reviews: string, passengers: string, drive: string, doors: string, rent: string, link: string}) => {
  return (
    <main className='w-[270px] rounded-2xl px-6 py-6 shadow-2xl flex flex-col gap-8' id={id}>
        <div className='flex justify-center items-center w-full'>
            <Image src={image} alt='car'></Image>
        </div>
        <div className='flex justify-center items-start gap-4 flex-col'>
            <div className='flex flex-col justify-center items-start gap-2'>
                <div>{name}</div>
                <div className='flex justify-start items-center gap-[6px] text-headingblack'>
                    <Image src={star} alt='star'></Image>
                    <div className='text-xs font-medium'>{stars} <span className='font-normal text-secondaryblack'>{`(${reviews} reviews)`}</span></div>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-2 font-normal text-secondaryblack text-xs w-full'>
                <div className='flex justify-start items-start w-full'>
                    <div className='flex justify-star items-center gap-1 w-2/3'>
                        <Image src={person} alt='person'></Image>
                        <div>{`${passengers} Passengers`}</div>
                    </div>
                    <div className='flex justify-star items-center gap-1'>
                        <Image src={gear} alt='person'></Image>
                        <div>{drive}</div>
                    </div>
                </div>
                <div className='flex justify-start items-start w-full'>
                    <div className='flex justify-star items-center gap-1 w-2/3'>
                        <Image src={air} alt='person'></Image>
                        <div>Air Conditioning</div>
                    </div>
                    <div className='flex justify-star items-center gap-1'>
                        <Image src={door} alt='person'></Image>
                        <div>{`${doors} Doors`}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-start flex-col gap-4'>
            <div className='flex justify-between items-center w-full'>
                <div className='text-myblack text-sm'>Price</div>
                <div className='text-headingblack font-semibold'>{`$${rent}`} <span className='text-secondaryblack text-sm'>/day</span></div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <Link href={link}>
                    <SecondaryButton text='Rent Now'></SecondaryButton>
                </Link>
            </div>
        </div>
    </main>
  )
}

export default CarCard