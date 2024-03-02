import { useTranslations } from 'next-intl';
import React from 'react'

const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <div className='px-20 py-24 min-h-screen flex items-start bg-gray-200'>
      <div className='w-1/2'>
        <h1 className='uppercase text-[180px] leading-none'>{t('left')}</h1>
      </div>
      <div className='w-1/2'>
        <h1 className='uppercase text-[180px] leading-none'>{t('right')}</h1>
        <div className='flex flex-col gap-6 my-12'>
          <div className='text-xl cursor-pointer group'>{t('social1')}<div className='w-0 h-[1px] bg-gray-900 group-hover:w-24 ease-in duration-200'></div></div>
          <div className='text-xl cursor-pointer group'>{t('social2')}<div className='w-0 h-[1px] bg-gray-900 group-hover:w-24 ease-in duration-200'></div></div>
          <div className='text-xl cursor-pointer group'>{t('social3')}<div className='w-0 h-[1px] bg-gray-900 group-hover:w-24 ease-in duration-200'></div></div>
          <div className='text-xl cursor-pointer group'>{t('social4')}<div className='w-0 h-[1px] bg-gray-900 group-hover:w-24 ease-in duration-200'></div></div>
        </div>
        <div>
          <p className='text-xl w-[500px]'>{t('address1')} <br /> {t('address2')}</p>
          <p className='text-xl mt-12'>{t('email')}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer