"use client"
import React from 'react';
import Particle from '../Particles';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    const option={
        initial:{
          x:"-100%",
          opacity:0
        },
        whileInView:{
          x:0,
          opacity:1
        }
      }
    return (
      <>
        <div style={{backgroundImage:"url(/assets/bg-explosion.png)"}} className='  1000px:min-h-[90vh] w-[100%] bg-cover  bg-center bg-no-repeat  relative text-white '>
           <Particle/>
          <div className="min-h-[30vh] w-full  text-center flex-col items-center 800px:h-[80vh] p-10 flex 800px:items-center 800px:justify-between 800px:flex-row">
           <div 
             
           className="">
             <motion.h1 {...option} className='font-semibold text-[40px] md:text-[70px]'> Hi iam <span className='text-orange-600 '>Badhon</span> full stack <br /> web developer front end focus </motion.h1>
           </div>

           <motion.div 
         >
      
     
             <Image width={1000} height={1000} src="/assets/badhon.png" alt='img not found' className='shadow-2xl  hidden 1000px:block 800px:w-[800px] 800px:h-[800px] bottom-0  absolute right-5  800px:right-4'/>
           </motion.div>

          </div>
            
        </div>
      
      </>
    );
};

export default Hero;