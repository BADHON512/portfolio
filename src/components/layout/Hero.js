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
<<<<<<< HEAD
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
=======
<div
  style={{ backgroundImage: "url(/assets/bg-explosion.png)" }}
  className="min-h-[90vh] w-full bg-cover bg-center bg-no-repeat relative text-white"
>
  <Particle />
  <div className="flex flex-col items-center justify-center text-center p-10 h-full 800px:flex-row 800px:text-left">
    {/* Text Section */}
    <div className="mb-8 800px:mb-0 800px:w-1/2">
      <motion.h1
        {...option}
        className="font-semibold text-[24px] 600px:text-[30px] xl:text-[40px]"
      >
        Hi, I am <span className="text-orange-600">Badhon</span>, <br /> a Full
        Stack Web Developer with a focus on Frontend
      </motion.h1>
    </div>

    {/* Image Section */}
    <motion.div className="relative 800px:w-1/2">
      <Image
        width={500}
        height={500}
        src="/assets/badhon.png"
        alt="img not found"
        className="shadow-2xl w-[250px] h-[300px] 600px:w-[350px] 600px:h-[400px] xl:w-[500px] xl:h-[500px] mx-auto 800px:absolute 800px:bottom-0 800px:right-4"
      />
    </motion.div>
  </div>
</div>
>>>>>>> 79693f9f44c7906af6707f6b9df3ddcb53447ef0

      
      </>
    );
};

export default Hero;
