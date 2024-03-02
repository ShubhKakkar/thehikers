import { useTranslations } from 'next-intl';
import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import Particles from '../ui/Particles';

const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <div className='flex flex-col justify-center px-4 md:px-20 md:pt-32 py-12 md:py-24 relative'>
      <div className='md:flex items-center justify-between'>
        <div className='text-6xl md:text-9xl md:w-3/4 uppercase'>
          <h1 className='bg-gradient-to-r from-pink-500 to-blue-700 bg-clip-text text-transparent py-12' data-scroll data-scroll-speed="0.2">
            {t('heroPart1')},
            <br /> {t('heroPart2')}
          </h1>
        </div>
        <div className='hidden md:block w-1/2'>
          <Particles />
        </div>
      </div>
      <div className='h-[1px] bg-gray-700 w-full mt-12'></div>
      <div className='flex items-center justify-between mt-4 text-xs md:text-base'>
        <p>{t('heroSub1')}</p>
        <p className='hidden md:block'>{t('heroSub2')}</p>
        <button className='border-gray-700 px-3 py-2 rounded-full border-[1px] uppercase flex items-center gap-1 group hover:bg-gray-900 ease-in duration-200 hover:text-gray-200 ml-8 md:ml-0'>
        {t('heroSubButton')} <FaArrowUp className='ml-2 rotate-45' />
        </button>
      </div>
    </div>
  )
}

export default Hero;
