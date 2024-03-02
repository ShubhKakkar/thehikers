"use client";
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';

const LanguageDropdown = ({ currentLanguage }: { currentLanguage: any }) => {
  const router = useRouter();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    router.push(`/${selectedLanguage}`);
  };

  return (
    <select
      className='cursor-pointer bg-transparent border-b border-gray-500 focus:outline-none text-xl'
      value="Select language"
      onChange={handleLanguageChange}
    >
      <option value="Select language" disabled hidden>
        Select language
      </option>
      <option value="ar" className="bg-gray-200">Arabic</option>
      <option value="en" className="bg-gray-200">English</option>
      <option value="es" className="bg-gray-200">Spanish</option>
      <option value="fr" className="bg-gray-200">French</option>
      <option value="hi" className="bg-gray-200">Hindi</option>
      <option value="id" className="bg-gray-200">Indonesian</option>
      <option value="it" className="bg-gray-200">Italian</option>
      <option value="ja" className="bg-gray-200">Japanese</option>
      <option value="lt" className="bg-gray-200">Latin</option>
      <option value="pt" className="bg-gray-200">Portuguese</option>
      <option value="ru" className="bg-gray-200">Russian</option>
      <option value="sa" className="bg-gray-200">Sanskrit</option>
      <option value="tr" className="bg-gray-200">Turkish</option>
      <option value="zh" className="bg-gray-200">Chienese</option>
    </select>
  );
};

export default LanguageDropdown;
