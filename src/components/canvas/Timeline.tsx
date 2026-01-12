import { useMemo } from 'react';
import { Card } from './Card';
import { projects } from '@/data/projects';

export function Timeline() {
    const cards = useMemo(() => {
        // "Today" is Z=0. 21 days ago is Z=-70.
        // Date diff mapping
        const now = new Date();

        return projects.map((project, i) => {
            const pDate = new Date(project.date);
            const diffTime = Math.abs(now.getTime() - pDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // Z position: proportional to days ago.
            // Scaling factor: -3 units per day approx? 
            // 21 days * 3 = 63 units deep.
            const z = -(diffDays * 3.5);

            // X/Y scatter
            // Deterministic random based on index or id for stability
            const seed = i * 1337;
            const x = ((seed % 100) / 100 - 0.5) * 20; // Spread -10 to 10
            const y = ((seed * 23 % 100) / 100 - 0.5) * 10; // Spread -5 to 5

            return {
                project,
                position: [x, y, z] as [number, number, number]
            };
        });
    }, []);

    return (
        <group>
            {cards.map(({ project, position }) => (
                <Card key={project.id} project={project} position={position} />
            ))}
        </group>
    );
}
