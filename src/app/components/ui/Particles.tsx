"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SphereComponent from './SphereComponent';

const Particles = () => {
    return (
        <div>
            <Canvas style={{ height: "600px", width: "100%" }} dpr={[1, 2]}>
                <SphereComponent />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            </Canvas>
        </div>
    )
}

export default Particles;
