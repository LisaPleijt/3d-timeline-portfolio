import { create } from 'zustand';
import * as THREE from 'three';

interface AppState {
    cameraPosition: [number, number, number] | null;
    cameraTarget: [number, number, number] | null;
    setCameraState: (pos: [number, number, number], target: [number, number, number]) => void;
}

export const useStore = create<AppState>((set) => ({
    cameraPosition: null, // Default will be handled by Scene
    cameraTarget: null,
    setCameraState: (pos, target) => set({ cameraPosition: pos, cameraTarget: target }),
}));
