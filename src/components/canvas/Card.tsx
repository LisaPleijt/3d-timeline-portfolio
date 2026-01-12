import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '@/types';
import { useRouter } from 'next/navigation';

interface CardProps {
    project: Project;
    position: [number, number, number];
}

export function Card({ project, position }: CardProps) {
    const mesh = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const router = useRouter();

    // Gentle float for "constellation" feel
    // We can randomize float parameters if we want more variation

    useFrame((state, delta) => {
        // Smooth hover transition for scale/rotation
        const targetScale = hovered ? 1.05 : 1;
        mesh.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 10);

        // Subtle tilt towards mouse could be added here
    });

    const handleClick = () => {
        // Transition logic will go here. For now, navigate.
        router.push(`/${project.slug}`);
    };

    return (
        <Float
            speed={1} // Animation speed
            rotationIntensity={0.2} // Float rotation
            floatIntensity={0.5} // Float height
            floatingRange={[-0.1, 0.1]}
        >
            <mesh
                ref={mesh}
                position={position}
                onClick={handleClick}
                onPointerOver={() => {
                    setHover(true);
                    document.body.style.cursor = 'pointer';
                }}
                onPointerOut={() => {
                    setHover(false);
                    document.body.style.cursor = 'auto';
                }}
            >
                <boxGeometry args={[3, 4, 0.2]} />
                <meshPhysicalMaterial
                    color={hovered ? "#ffffff" : "#f0f0f0"}
                    roughness={0.2}
                    metalness={0.1}
                    transmission={0.9} // Glass-like
                    thickness={0.5}
                    transparent={true}
                    opacity={0.9}
                />

                {/* Content Layer */}
                <group position={[0, 0, 0.11]}>
                    <Text
                        fontSize={0.25}
                        color="#333"
                        position={[-1.2, 1.5, 0]}
                        anchorX="left"
                        maxWidth={2.5}
                    >
                        {project.title}
                    </Text>
                    <Text
                        fontSize={0.15}
                        color="#666"
                        position={[-1.2, 1.2, 0]}
                        anchorX="left"
                    >
                        {project.date}
                    </Text>
                    <Text
                        fontSize={0.12}
                        color="#888"
                        position={[-1.2, 1.0, 0]}
                        anchorX="left"
                    >
                        {project.type.toUpperCase()}
                    </Text>
                    <Text
                        fontSize={0.15}
                        color="#444"
                        position={[-1.2, 0.5, 0]}
                        anchorX="left"
                        maxWidth={2.4}
                        lineHeight={1.5}
                    >
                        {project.excerpt}
                    </Text>
                </group>
            </mesh>
        </Float>
    );
}
