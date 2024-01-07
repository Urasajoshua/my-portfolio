import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText text='Passions Fuels Purpose' className='mb-16'/>
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-black/75'>Biography</h2>
                <p className=' font-medium'>
                Hi, I'm Joshua Urasa(a.k.a lastborn), a Software Developer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 1.5 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients' visions to life.
                </p>

                <p className='my-4 font-medium'>
                I believe that design is about more than just making things look pretty – it's about solving problems and 
creating intuitive, enjoyable experiences for users. 
                </p>

                <p>
                Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-black p-8'>
            <Image src='/j1.png' alt='joshua image' className=' overflow-hidden bg-black' width={680} height={100}/>



            </div>

            <div className='col-span-2 flex flex-col items-end justify-between'>
                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>10+</span>
                    <h2 className='text-xl font-medium capitalize text-black/75'>Satisfied client</h2>
                </div>

                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>10+</span>
                    <h2 className='text-xl font-medium capitalize text-black/75'>complete projects</h2>
                </div>

                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>6 </span>
                    <h2 className='text-xl font-medium capitalize text-black/75'>month of experience</h2>
                </div>
            </div>
        </div>
        </Layout>
    </div>
  )
}

export default page