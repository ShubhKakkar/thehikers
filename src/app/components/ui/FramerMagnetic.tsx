"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FramerMagnetic = ({ children }: { children: any }) => {
    const [position, setPostion] = useState({
        x: 0,
        y: 0
    });

    const ref = useRef();

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width) / 2;
        const y = clientY - (top + height) / 2;
        setPostion({ x, y });
    }

    const handleMouseLeave = (e) => {
        setPostion({ x: 0, y: 0 });
    }

    const { x, y } = position;

    return (
        <motion.div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} ref={ref} animate={{ x, y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}>
            {children}
        </motion.div>
    )
}

export default FramerMagnetic