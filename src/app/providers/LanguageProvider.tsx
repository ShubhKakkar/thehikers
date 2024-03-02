"use client";
import React, { ReactNode, createContext, useEffect, useState } from 'react';

interface LanguageContextProps {
    language: string;
    changeLanguage: (language: string) => void;
}

const languages = ["en", "ar", "fr", "ru", "hi"];

export const LanguageContext = createContext<LanguageContextProps>({
    language: "en",
    changeLanguage: (newLanguage: string) => { },
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        const storedLanguage = window.localStorage.getItem("language");
        if (languages.includes(storedLanguage || "")) {
            setLanguage(storedLanguage || "en");
        }
    }, []);

    const changeLanguage = (newLanguage: string) => {
        if (languages.includes(newLanguage)) {
            window.localStorage.setItem("language", newLanguage);
            setLanguage(newLanguage);
        }
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
