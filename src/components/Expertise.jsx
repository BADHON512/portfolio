"use client"
import { experiences, textVariant } from '@/hellper/Hellper';
import { styles } from '@/styles';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/hoc';
import Image from 'next/image';
styles



const ExperienceCart = ({ ex }) => {

    return (
        <VerticalTimelineElement
            contentStyle={{ background: "#1d1836", color: "3ffff" }}
            contentArrowStyle={{ borderRight: "7px solid" }}
            date={ex.date}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <Image
                        src={ex.icon}
                        alt="image not found"
                        width={100}
                        height={100}
                        layout="fixed"
                        objectFit="contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-[24px] font-bold'>{ex.title}</h3>
                <p className='font-semibold text-gray-300'>{ex.company_name}</p>
                <ul className='mt-5 list-disc ml-5 space-y-2'>
                    {
                        ex.points.map((value, index) => (
                            <li key={index}

                                className='text-white-100 text-[14] pl-1 tracking-wider'>{value}</li>
                        ))
                    }
                </ul>
            </div>
        </VerticalTimelineElement>
    )
}

const Expertise = () => {

    return (
        <>

            <motion.div
                variants={textVariant()}>
                <p className="text-[#dfd9ff]  font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">What I have done so far</p>
                <h2 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">Work Experience</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {
                        experiences.map((value, index) => (
                            <ExperienceCart key={index} ex={value} />
                        ))
                    }
                </VerticalTimeline>
            </div>

        </>
    );
};

export default SectionWrapper(Expertise, "expertise");