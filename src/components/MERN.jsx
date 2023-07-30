"use client"
import React from 'react';
import { SectionWrapper } from '@/hoc';
import { Icon } from '@/hellper/Hellper';
import Image from 'next/image';

const MERN = () => {
    return (
        <div className='w-full min-h-[100vh]'>

            <div className="w-[70%] min-h-[70vh] mx-auto bg-[#06071d] py-5 800px:py-10 flex justify-center items-center
            ">
                <div className="flex justify-center items-center gap-4 800px:gap-7 flex-wrap h-full  ">

                    {
                        Icon.map((value, index) => (
                            <div key={index} className='flex justify-center items-center '>
                                <div>
                                    <div className='h-20 w-20 rounded-full border border-blue-400 flex justify-center items-center'>
                                        <Image src={value.img} height={80} width={80} alt='img error' className='text-white 
                                        object-contain rounded-full z-10 '/>


                                    </div>
                                    <div className='text-center mt-2'>
                                        <h1>{value.name}</h1>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(MERN, "");