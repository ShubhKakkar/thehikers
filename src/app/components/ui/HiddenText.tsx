
import React, { ReactNode } from 'react';

const HiddenText = ({children}: {children: ReactNode}) => {
  return (
    <div className='max-h-12 relative group h-24 overflow-hidden'>
        <p className='group-hover:-translate-y-8 ease-in duration-300 group-hover:rotate-[10deg]'>{children}</p>
        <p className='translate-y-8 group-hover:-translate-y-8 ease-in duration-300 relative top-1 -rotate-[10deg] group-hover:rotate-0'>{children}</p>
    </div>
  )
}

export default HiddenText