import { Environment } from '@react-three/drei';

export function Lights() {
    return (
        <>
            <ambientLight intensity={0.5} color="#c0d0dc" />
            {/* 
        Using 'city' or 'studio' as a base, but highly blurred for diffuse look.
        Or a custom color environment.
      */}
            <Environment preset="city" blur={1} />

            {/* Subtle directional light for key highlights if needed, but keeping it minimal */}
            <directionalLight position={[10, 10, 5]} intensity={0.5} castShadow color="#ffffff" />
        </>
    );
}
