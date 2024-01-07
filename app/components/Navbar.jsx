"use client"
import React, { useEffect, useState } from 'react'
import { NavItems, SocialLinks } from '../constants'
import Link from 'next/link'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'



const MotionLink= motion(Link)


const Navbar = () => {
    const [active,setActive] = useState('')
    const pathName = usePathname()
    console.log(pathName);

    useEffect(()=>{
        setActive(pathName)
    },[pathName])
  return (
    <div className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            {NavItems.map(item=>(
                <Link className='mr-4 relative group' key={item.link} href={item.link}>
                    {item.name}
                    <span className={`h-[1px] inline-block   bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${active === item.link ? 'w-full': 'w-0'}`}>&nbsp;</span>
                </Link>
            ))}
        </nav>
       
        <nav className='flex items-center'>
            {SocialLinks.map(item=>(
                <MotionLink whileHover={{y:2}} className='mr-4' key={item.link} href={item.link}>
                    
                    <Icon className='' height={20} icon={item.name} />
                </MotionLink>
            ))}
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
        </div>
    </div>
  )
}

export default Navbar