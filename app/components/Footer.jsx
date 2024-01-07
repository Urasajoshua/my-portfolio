import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full border-t-2 border-solid border-black font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <Link href=''></Link>
      </Layout>
    </div>
  )
}

export default Footer