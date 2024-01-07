import Link from 'next/link'
import React from 'react'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <img src='/Software Developer.png' className='bg-transparent fill-black animate-spin-slow'/>
            <Link href='mailto:urasajoshuag@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'></Link>
        </div>
    </div>
  )
}

export default HireMe