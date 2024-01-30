import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";


const CameraRig = ({children}) => {
    const group = useRef();
    useFrame((state, delta) => {
        const isMobile = window.innerWidth <= 600;
        let targetPosition = [-0.4, 0, 2];
            if(isMobile) targetPosition = [0, 0, 6]
            else targetPosition = [0, 0, 3];

        easing.damp3(state.camera.position, targetPosition, 0.25, delta)

        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 4, -state.pointer.x / 4, 0],
            0.25,
            delta,
        )
    })

    return (
        <group ref={group}>
            {children}
        </group>
    );
}

export default CameraRig;