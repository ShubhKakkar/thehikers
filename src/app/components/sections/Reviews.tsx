import { useTranslations } from 'next-intl';
import React from 'react'
import { FaArrowUp } from 'react-icons/fa';

const Reviews = () => {
    const t = useTranslations('Reviews');
    return (
        <div className='pt-12 pb-12 md:pb-24 px-4 md:px-20 min-h-screen grid place-items-center bg-[#cdea68] -z-10' data-scroll-section data-scroll data-scroll-speed={-.6}>
            <div>
                <h1 className='text-gray-900 text-8xl md:text-[300px] uppercase font-bold text-center leading-none'>{t('message')}</h1>
                {/* <div className='mt-24'>
                    <button className='mt-8 bg-zinc-900 rounded-full px-8 py-4 text-gray-100 text-xl uppercase flex items-center justify-between group mx-auto'>
                        <span>{t('buttonText')}</span>
                        <span className='rounded-full bg-gray-100 p-1 ease-in duration-200 scale-[0.4] group-hover:scale-125 relative left-4'>
                            <FaArrowUp className='text-gray-900 rotate-45 scale-0 group-hover:scale-75' />
                        </span>
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default Reviews