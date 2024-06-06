import React from 'react'
import Heading from './Heading'
import CarCard from './CarCard'
import { carsdata } from '@/data/cars'
import Image from 'next/image'
import arrow from "@/assets/icons/arrow-right (2).png"
import Link from 'next/link'

const RentalDeals = () => {
  return (
    <main className='h-[800px] flex flex-col justify-center items-center gap-20 margin'>
            <div className='flex justify-center items-center gap-8 flex-col'>
                <Heading text='POPULAR RENTAL DEALS'></Heading>
                <div className='text-myblack font-medium text-4xl'>Most popular cars rental deals</div>
            </div>
            <div className='flex justify-center items-center gap-8'>
              {carsdata.slice(0, 4).map((car) => (
                <CarCard
                  id={car.id}
                  image={car.image}
                  name={car.name}
                  stars= {car.stars}
                  reviews= {car.reviews}
                  passengers= {car.passengers} 
                  drive= {car.drive}
                  doors= {car.doors}
                  rent= {car.rent}
                  link= {car.link}
                />
              ))}
            </div>
            <Link href={"/"}>
              <div className='flex justify-center items-center gap-2 py-3 px-14 rounded-lg border-[#E0E0E0] border-2 shadow-2xl'>
                <div className='text-[#4E4E4E]'>Show All Vehicles</div>
                <Image src={arrow} alt='arrow'></Image>
              </div>
            </Link>
      </main>
  )
}

export default RentalDeals