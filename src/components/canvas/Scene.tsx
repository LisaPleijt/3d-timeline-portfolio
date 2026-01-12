'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

// We'll import these later as we create them
import { MapControls } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Timeline } from './Timeline';
import { Lights } from './Lights';
import { useStore } from '@/lib/store';
import * as THREE from 'three';

function CameraHandler() {
    const { camera, controls } = useThree();
    const setCameraState = useStore((state) => state.setCameraState);
    const savedPos = useStore((state) => state.cameraPosition);
    const savedTarget = useStore((state) => state.cameraTarget);
    // @ts-ignore
    const controlsRef = useRef<any>(null);

    useEffect(() => {
        // Restore camera if saved
        if (savedPos && savedTarget) {
            camera.position.set(...savedPos);
            if (controlsRef.current) {
                controlsRef.current.target.set(...savedTarget);
                controlsRef.current.update();
            }
        }
    }, [camera, savedPos, savedTarget]);

    // Save state on unmount or navigation?
    // Easier: Save periodically or on specific events.
    // We'll save just before main component unmounts? 
    // R3F component unmounts when we navigate away from /.

    useEffect(() => {
        return () => {
            // Save on unmount
            if (controlsRef.current) {
                setCameraState(
                    camera.position.toArray() as [number, number, number],
                    controlsRef.current.target.toArray() as [number, number, number]
                );
            }
        };
    }, [camera, setCameraState]);

    return (
        <MapControls
            ref={controlsRef}
            enableDamping
            dampingFactor={0.05}
            screenSpacePanning={true}
            minDistance={5}
            maxDistance={100}
            maxPolarAngle={Math.PI / 2}
        />
    );
}

export default function Scene() {
    return (
        <div className="fixed inset-0 z-0">
            <Canvas
                shadows
                dpr={[1, 1.5]} // Limit dpr for performance
                gl={{ antialias: true, alpha: true }}
                camera={{ position: [0, 5, 20], fov: 50, near: 0.1, far: 200 }}
            >
                <Suspense fallback={null}>
                    <Lights />
                    <Timeline />
                    <CameraHandler />
                </Suspense>
            </Canvas>
        </div>
    );
}
