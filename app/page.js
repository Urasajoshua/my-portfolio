import Image from 'next/image'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import HireMe from './components/HireMe'

export default function Home() {
  return (
    <div className='flex items-center text-black  w-full min-h-screen'>
      <Layout className='pt-0 '>
        <div className='flex items-center justify-between'>
         <div className='w-1/2'>
         <Image src='/joshua.png' alt='joshua image' className='rounded-full overflow-hidden' width={480} height={100}/>
         </div>
         <div className='w-1/2 flex flex-col items-center self-center'>
          <h1></h1>
          <AnimatedText text='Turning Vision Into Reality With Code and Design.' className='!text-left'/>
          <p className='my-4 text-base font-medium '>as a skilled full-stack developer, I am  dedicated to turning ideas into innovative web application or mobile application:
            Explore my latest projects and articles, showcasing my expertise in different stacks.
          </p>
          <div className='flex items-center self-start mt-2'>
            <Link href='/' target='_blank' className='flex items-center bg-black text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black' download={true}>Resume</Link>
            <Link href='/' target='_blank' className='ml-4 text-lg font-medium capitalize text-black underline'>Contact</Link>
          </div>
         </div>
        </div>
      </Layout>
      <HireMe/>
    </div>
  )
}
