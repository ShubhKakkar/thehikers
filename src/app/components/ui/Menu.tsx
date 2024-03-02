import React from 'react'
import LanguageDropdown from './LanguageDropdown';
import { useTranslations } from 'next-intl';
import { getLocale } from 'next-intl/server';
import HiddenText from './HiddenText';

const Menu = () => {
    const t = useTranslations('Header');
    let currentLanguage;

    getLocale().then(language => {
        currentLanguage = language;
    });
    return (
        <div className='flex items-start gap-6'>
            <LanguageDropdown currentLanguage={currentLanguage} />
            <span className='cursor-pointer text-xl group'><HiddenText>{t('navItem1')}</HiddenText><div className='w-0 h-[1px] bg-gray-900 -mt-4'></div></span>
            <span className='cursor-pointer text-xl group'><HiddenText>{t('navItem2')}</HiddenText><div className='w-0 h-[1px] bg-gray-900 -mt-4'></div></span>
            <span className='cursor-pointer text-xl group'><HiddenText>{t('navItem3')}</HiddenText><div className='w-0 h-[1px] bg-gray-900 -mt-4'></div></span>
            <span className='cursor-pointer text-xl group'><HiddenText>{t('navItem4')}</HiddenText><div className='w-0 h-[1px] bg-gray-900 -mt-4'></div></span>
            <span className='cursor-pointer text-xl group'><HiddenText>{t('navItem5')}</HiddenText><div className='w-0 h-[1px] bg-gray-900 -mt-4'></div></span>
        </div>
    )
}

export default Menu