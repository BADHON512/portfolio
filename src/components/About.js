/* eslint-disable react/no-unescaped-entities */
"use client"
import { fadeIn, services, textVariant } from '@/hellper/Hellper';
import { motion } from 'framer-motion';
import React from 'react';
import {Tilt} from 'react-tilt';
import  Image  from 'next/image';
import SectionWrapper from './../hoc/SectionWraper';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';




const ServiceCard = ({title,index,icon,right}) => {
    
    return (
        <Tilt className=" 550px:w-[250px] w-full">
            <motion.div
            id='border'
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className='w-full  p-[1px] rounded-md shadow-card'
            >

                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-[#151030]rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative">
                        <Image src={icon} height={500} width={500} alt={title} className='w-30 h-30 object-contain rounded-sm'/>
                        <div className='absolute top-3 right-3 text-[#00FF00]'>
                           {
                            right==="yes" &&(
                                <CheckCircleOutlineIcon  className='text-[40px]'/>
                            )
                           }
                        </div>

                        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                    </div>


            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <div className=' max-w-7xl mx-auto '>
            <motion.div variants={textVariant()}>
                <p className="text-[#dfd9ff]  font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">Introduction</p>
                <h2 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">Overview</h2>
            </motion.div>

            <motion.p
                variants={(fadeIn("","", 0.5,1))}
                className='text-gray-400 max-w-3xl leading-8 text-[17px] mt-10'
            >
                "Versatile full stack web developer skilled in HTML, CSS, JavaScript, React, and Next.js. Passionate about creating dynamic and responsive applications that captivate users and deliver seamless experiences. Constantly seeking innovative solutions to complex challenges. Let's build something amazing together!"</motion.p>

            <div className="mt-20 flex flex-wrap gap-10 w-full justify-center">
                {
                    services.map((value, index) => (
                        <ServiceCard key={value.title} {...value} index={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default SectionWrapper(About, "About") 