"use client"
import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { GitHub } from '@mui/icons-material';
import { projects } from '@/hellper/Hellper';
import { fadeIn } from './../hellper/Hellper';
import { SectionWrapper } from '@/hoc';
import { styles } from '@/styles';

import Image from 'next/image';
import { github } from '../../asset';
import Link from 'next/link';


const ProjectCart = ({ index,image,source_code_link,tags, name,description, LiveLink }) => {

    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450
                }}
                className="bg-[#061b05] p-5 rounded-2xl sm:w-[360px] w-full"
            >
          <div className='relative w-full h-[230px]'>
            <Image height={500} width={500} src={image} alt="" className='w-full h-full object-cover rounded-2xl' />

            <div className='absolute inset-0 flex justify-end m-3 card-img-hover'>
                <div onClick={()=>window.open(source_code_link,"_blank")}
                className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                > {<Image src={github} width={40} height={40} alt="image not found"
                className='text-[40px] text-[#061b05]'/>}</div>
            </div>
          </div>
          <div className='mt-5'>
          <h3 onClick={()=>{window.open(LiveLink,"_blanks")}} className='cursor-pointer text-white font-bold text-[24px] hover:text-blue-400' title="Open live project"> {name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>


            </Tilt>
        </motion.div>
    )
}

const Work = () => {
    return (
        <>
            <motion.div className="">
                <p className={`${styles.sectionSubText}`}>My works</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className="">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>

                <div className='mt-20 flex justify-center flex-wrap gap-7'>
                    {
                        projects.map((value, index) => (
                            <ProjectCart key={index} {...value} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Work, 'Work')