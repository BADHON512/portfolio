"use client"
import { styles } from '@/styles';
import React, { useRef, useState } from 'react';
import { SectionWrapper } from '@/hoc';
import { motion } from 'framer-motion';
import { slideIn } from './../hellper/Hellper';

import { toast } from 'react-toastify';
import emailjs from "@emailjs/browser"

const Contact = () => {
  const serviceId='service_bjf8mnt'
  const template='template_31e65ac'
  const api='N9w0vqMw5pTpOHikm'
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form,setForm]=useState({
        name:"",
        email:"",
        message:""
    })
  
    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        console.log(form.name,form.email,form.message)
        e.preventDefault()
        setLoading(true)
    
         emailjs.send(
          serviceId,
          template,
         
          {
            form_name:form.name,
            to_name:'Badhon',
            form_email:form.email,
            to_email:'badhon2020year@gmail.com',
            message:form.message
          },
          api
         ).then((res)=>{
          setLoading(false)
          toast.success('Thank you. I will get back to you as soon as possible.')
          setForm({
            name: "",
            email: "",
            message: "",
          });
         }).catch((err)=>{
          toast.error(err.message)
         })
        
        
      }
      console.log(process.env.BADHON+ "badhon")
    return (
        <div
        className={``}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
  
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12  border 800px:w-[70%] mx-auto border-gray-600 p-3 800px:py-8 800xp:px-2 rounded-[5px]  '
          >

            <div className="flex flex-col w-full 800px:w-[80%] mx-auto gap-8">
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary bg-transparent rounded-lg outline-none border border-blue-600 font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary bg-transparent rounded-lg outline-none border border-blue-600 font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary bg-transparent rounded-lg outline-none border border-blue-600 font-medium'
              />
            </label>
  
            <button
              type='submit'
              className='bg-[black] py-3 px-8 rounded-xl outline-none w-fit  font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>

            </div>
            
          </form>
        </motion.div>
  
    
      </div>
    );
};

export default SectionWrapper(Contact, "Contact") 