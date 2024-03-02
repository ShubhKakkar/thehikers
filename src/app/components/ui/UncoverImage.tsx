'use client';
import React, { ReactNode } from 'react';
import { easeIn, motion } from 'framer-motion';
import Image from 'next/image';

const UncoverImage = ({ children, className }: { children: ReactNode, className: string }) => {
    return (
        <motion.div className={`relative ${className}`}>
            <motion.div className='absolute top-0 left-0 h-full w-0 bg-gray-500 opacity-30 rounded-xl' initial={{width: "100%"}} whileInView={{width: "0%",
                transition: {
                    duration: 0.5,
                    ease: easeIn,
                    delay: 0.3
                },}}></motion.div>
            <Image src='https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='web-development-demo' height={400} width={600} className="object-cover rounded-xl w-full" />
        </motion.div>
    )
}

export default UncoverImage