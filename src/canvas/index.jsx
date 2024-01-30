import React from 'react';
import {Canvas} from "@react-three/fiber";
import {Environment, Center} from "@react-three/drei";
import CameraRig from './CameraRig';
import Cap from "./Cap";

const CanvasModel = () => {
    return (
        <Canvas
            shadows
            camera={{position: [0, 0, 0], fov: 25}}
            gl={{preserveDrawingBuffer: true}}
            className="w-full max-w-full h-full transition-all ease-in bg-stone-200"
        >
            <ambientLight intensity={0.4} />
            <Environment preset="sunset" />
            <CameraRig>
                <Center>
                    <Cap />
                </Center>
            </CameraRig>
        </Canvas>
    );
}

export default CanvasModel;