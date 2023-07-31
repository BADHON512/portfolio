"use client"
import { navLinks } from '@/hellper/Hellper';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';



const Navbar = () => {
    const [open ,setOpen]=useState(false)
    const [active,setActive]=useState("")

    


    return (
        <nav className=' w-full h-[10vh] bg-black p-3 sticky top-0 z-50 '  >
            <div className="flex justify-between items-center font-semibold ">

                <div className=" text-white flex items-center">
                    <Image src="/assets/B.jpg" height={30} width={30} alt='image not found' className='rounded-full  object-fill' />
                    <h1 className='ml-3 cursor-pointer'>
                    
                    <Link href="/"> Badhon | Web developer</Link></h1>
                </div>

                <div className="flex items-center justify-between text-white">

                    {
                        navLinks?.map((value, index) => (

                            <Link className={`${active===value.id?" text-[#00ff00] border-b-4 border-b-white text-center":"text-white"} mr-1 p-1 hidden 550px:block  hover:text-[#00ff00] `} onClick={()=>setActive(value.id)} key={index} href={`#${value.title}`}>{value.title} </Link>

                        ))
                    }




                </div>


                <div className="550px:hidden block text-white">
                  
                    {
                        open?( <CloseIcon onClick={()=>setOpen(!open)}/> ):(<FormatListBulletedIcon 
                    onClick={()=>setOpen(!open)}
                    color='#ffff' />)
                    }
                </div>
            </div>

            {/* fo mobile */}

         {
            open &&(
                <motion.div 
                initial={{x:"100vw",opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{delay:0.2}}
                className="bg-black absolute right-0 top-[55px] 550px:hidden text-white min-h-[25vh] w-[150px] z-40 ">
                <div className="flex justify-center w-full
                  ">
                   
                   <div className='fixed flex flex-col mt-2 mb-2'>
                   {
                        navLinks?.map((value, index) => (

                            <Link className={`${active===value.id? "text-[#00ff00] border-b-4 border-b-white text-center":"text-white"} mr-1 p-1  hover:text-[#00ff00] `} onClick={()=>setActive(value.id)} key={index} href={`/${value.title}`}>{value.title} </Link>

                        ))
                    }
                   </div>
                </div>
            </motion.div>
            )
         }




        </nav>
    );
};

export default Navbar;
