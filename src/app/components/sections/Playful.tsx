"use client";
import React, { useEffect, useRef, useState } from 'react';

const Playful = () => {
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();

  const handleEyeball = (e) => {
    let leftEyeRotation = 0;
    let rightEyeRotation = 0;

    if (leftEyeRef.current) {
      const rect = leftEyeRef.current.getBoundingClientRect();
      let x = rect.left + rect.width / 2 + window.scrollX;
      let y = rect.top + rect.height / 2 + window.scrollY;
      let radian = Math.atan2(e.pageX - x, e.pageY - y);
      leftEyeRotation = (radian * (180 / Math.PI) * -1) + 270;
      console.log(leftEyeRotation);
    }
    
    if (rightEyeRef.current) {
      const rect = rightEyeRef.current.getBoundingClientRect();
      let x = rect.left + rect.width / 2 + window.scrollX;
      let y = rect.top + rect.height / 2 + window.scrollY;
      let radian = Math.atan2(e.pageX - x, e.pageY - y);
      rightEyeRotation = (radian * (180 / Math.PI) * -1) + 270;
      console.log(rightEyeRotation);
    }
    

    // Set the rotation styles for the eyes
    if (leftEyeRef.current) {
      leftEyeRef.current.style.transform = `rotate(${leftEyeRotation}deg)`;
    }

    if (rightEyeRef.current) {
      rightEyeRef.current.style.transform = `rotate(${rightEyeRotation}deg)`;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleEyeball);

    return () => {
      window.removeEventListener('mousemove', handleEyeball);
    };
  }, []);

  return (
    <div className='hidden py-24 px-20 h-screen md:grid place-items-center -z-10' data-scroll-section data-scroll data-scroll-speed={-.4}>
      <div
        className={`h-[90vh] w-[90vw] bg-cover bg-center bg-[url('/assets/images/playful.jpg')] rounded-xl bg-fixed brightness-90 grid place-items-center`}
      >
        <div className='face relative w-[500px] h-[500px] rounded-full bg-yellow-500 grid place-items-center'>
          <div className="eyes relative flex items-center gap-12">
            <div className="eye relative w-48 h-48 block bg-gray-100 rounded-full" ref={leftEyeRef}></div>
            <div className="eye relative w-48 h-48 block bg-gray-100 rounded-full" ref={rightEyeRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playful;
