"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Marquee = ({ text }: { text: string }) => {
    return (
        <div>
            <div className='bg-[#004843] py-4 flex items-center flex-shrink-0 whitespace-nowrap rounded-t-3xl min-h-48 overflow-hidden text-gray-200'>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity
                    }}
                    className='text-[400px] uppercase'>
                    {text}{" "}
                </motion.h1>
                <motion.h1
                    className='text-[400px] uppercase'
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        ease: "linear",
                        duration: 20,
                        repeat: Infinity
                    }}
                >
                    {text}{" "}
                </motion.h1>
            </div>
        </div>
    )
}

export default Marquee;
