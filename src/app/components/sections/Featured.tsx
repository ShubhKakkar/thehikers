"use client";
import React from 'react';
import { motion } from "framer-motion";
import { FaArrowUp } from 'react-icons/fa';

const Featured = ({ t }: { t: any }) => {
    return (
        <div className='py-24 px-20 bg-gray-200 shadow-2xl'>
            <div className='grid grid-cols-2 gap-8'>
                <div className='col-span-1 flex flex-col gap-6'>
                    <p className='uppercase text-xl font-medium'>{t?.title1}</p>
                    <motion.div className='h-[70vh] rounded-xl bg-[url("https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center' initial={{ scale: 1 }} whileHover={{ scale: 0.9 }} transition={{ type: "spring", duration: 0.3, stiffness: 20, damping: 7 }}>
                    </motion.div>
                    <div className='flex items-center gap-4'>
                        <p className='rounded-full px-4 py-1 border border-gray-900 uppercase text-xl cursor-pointer'>{t?.category11}</p>
                        <p className='rounded-full px-4 py-1 border border-gray-900 uppercase text-xl cursor-pointer'>{t?.category12}</p>
                        <p className='rounded-full px-4 py-1 border border-gray-900 uppercase text-xl cursor-pointer'>{t?.category13}</p>
                        <p className='rounded-full px-4 py-1 border border-gray-900 uppercase text-xl cursor-pointer'>{t?.category14}</p>
                    </div>
                </div>
                <div className='col-span-1 flex flex-col gap-6'>
                    <p className='uppercase text-xl font-medium'>{t?.title2}</p>
                    <motion.div className='h-[70vh] rounded-xl bg-[url("https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center' initial={{ scale: 1 }} whileHover={{ scale: 0.9 }} transition={{ type: "spring", duration: 0.3, stiffness: 20, damping: 7 }}>
                    </motion.div>
                    <div className='flex items-center gap-4'>
                        <p className='rounded-full px-4 py-1 border border-gray-900 uppercase text-xl cursor-pointer'>{t?.category21}</p>
                        <p className='rounded-full px-4 py-1 border border-gray-900 uppercase text-xl cursor-pointer'>{t?.category22}</p>
                    </div>
                </div>
            </div>
            <div className='mt-36'>
                <button className='mt-8 bg-zinc-900 rounded-full px-8 py-4 text-gray-100 text-xl uppercase flex items-center justify-between group mx-auto'>
                    <span>{t?.buttonText}</span>
                    <span className='rounded-full bg-gray-100 p-1 ease-in duration-200 scale-[0.4] group-hover:scale-125 relative left-4'>
                        <FaArrowUp className='text-gray-900 rotate-45 scale-0 group-hover:scale-75' />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Featured