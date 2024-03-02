"use client";
import React, { ReactNode, useEffect } from 'react'

const LayoutProvider = ({children}: {children: ReactNode}) => {
    useEffect(() => {
        async function getLocomotive() {
            const Locomotive = (await import("locomotive-scroll")).default;
            const scroll = new Locomotive({
                smooth: true,
            });
        }

        getLocomotive();
    }, []);
    return (
        <div>{children}</div>
    )
}

export default LayoutProvider