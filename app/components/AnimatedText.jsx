"use client"
import React from 'react'
import { motion as m } from 'framer-motion' 

const quote = {
    initial:{
        opacity:0,
        y:50
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            delay:0.1,
            staggerchildren: 0.08
        }
    }
}


const singleWord = {
    initial:{
        opacity:0,
        y:50
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            delay:0.5
        }
    }
}

const AnimatedText = ({text,className=''}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
        <m.h1 variants={quote} initial='initial' animate='animate' className={`inline-block w-full text-black font-bold capitalize text-2xl ${className}`}>
            {
            text
            }
            </m.h1>
    </div>
  )
}

export default AnimatedText