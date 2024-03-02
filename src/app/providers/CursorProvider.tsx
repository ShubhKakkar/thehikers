"use client";
import { CursorOne } from 'cursor-style'
import React, { ReactNode } from 'react'

const CursorProvider = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
            <CursorOne size={50} delay={5} bgColor="red" useMixBlendDifference={true} />
        </div>
    )
}

export default CursorProvider