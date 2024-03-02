"use client";
import React, { useRef } from 'react';
import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const BoxComponent = () => {
    const ref = useRef();

    useFrame(({ clock }) => {
        ref.current.rotation.z = clock.getElapsedTime() * 0.5;
        ref.current.rotation.y = clock.getElapsedTime() * 0.5;
    });

    return (
        <Box position={[0, 0, 1]} args={[2, 2, 2]} ref={ref}>
            <meshStandardMaterial color="purple" emissiveIntensity={0.5} roughness={0.5} emissive="purple"  />
        </Box>
    );
}

export default BoxComponent;
