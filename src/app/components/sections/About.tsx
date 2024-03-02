import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import UncoverImage from '../ui/UncoverImage';

const About = () => {
  const t = useTranslations('About');
  return (
    <div className='py-24 px-20 bg-[#c7e267] text-gray-900 flex flex-col gap-16 shadow-2xl'>
      <p className='text-6xl'>{t('message')}</p>
      <div className='h-[1px] bg-zinc-900'></div>
      <div className='flex items-start justify-between'>
        <p className='text-xl'>{t('expectationsTitle')}</p>
        <div className='w-1/2 text-xl flex flex-col gap-12'>
          <p>{t('expectations1')}</p>
          <p>
            {t('expectations2')}
          </p>
        </div>
      </div>
      <div className='h-[1px] bg-zinc-900'></div>
      <div className='flex items-start justify-between'>
        <div className='group'>
          <p className='text-6xl'>{t('approach')}</p>
          <button className='mt-8 bg-zinc-900 rounded-full px-8 py-4 text-gray-100 text-xl uppercase flex items-center justify-between group'>
            <span>{t('buttonText')}</span>
            <span className='rounded-full bg-gray-100 p-1 ease-in duration-200 scale-[0.4] group-hover:scale-125 relative left-4'>
              <FaArrowUp className='text-gray-900 rotate-45 scale-0 group-hover:scale-75' />
            </span>
          </button>

        </div>
        <UncoverImage className='w-1/2 rounded-xl'>
          <Image src='https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='web-development-demo' height={400} width={600} className='object-cover' />
        </UncoverImage>
      </div>
    </div>
  )
}

export default About