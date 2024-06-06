import React from 'react'
import Link from 'next/link'

const PrimaryButton = ({text}: {text: string}) => {
  return (
    <main className='rounded-lg px-10 py-3 bg-primaryblue w-fit'>
        <Link href={"/"}>
            <div className='font-medium text-mywhite'>{text}</div>
        </Link>
    </main>
  )
}

export default PrimaryButton