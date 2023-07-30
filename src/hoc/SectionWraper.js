import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '@/styles';
import { staggerContainer } from '@/hellper/Hellper';


const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section
            className={`${styles.padding} min-w-7xl mx-auto relative z-0 `}
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}

        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}
export default SectionWrapper;