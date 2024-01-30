import React from "react";
import {easing} from 'maath';
import {useSnapshot} from "valtio";
import {useFrame} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";
import state from '../store';

const Cap = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF("/cap.glb");
    const stateString = JSON.stringify(snap);

    useFrame((state, delta) => {
        easing.dampC(materials.cap_mat.color, snap.color, 0.25, delta);
    });

    return (
        <group key={stateString}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cap.geometry}
        material={materials.cap_mat}
        scale={0.5}
        dispose={null}
        />
      </group>
    );
}

export default Cap;

