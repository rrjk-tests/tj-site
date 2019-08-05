import React, { useEffect, useState } from 'react';
import { useTheatre } from '@theatre/hooks';
import { Canvas, useThree } from 'react-three-fiber';

import './style.scss';
import { TLEasyAnimation } from '../../../../shared/Theatre';
import { Vector3, Color, PerspectiveCamera } from 'three';

const convertPositionToVector3 = ({x, y, z}: { x: number, y: number, z: number }) => new Vector3(x, y, z)
const primaryLightColor = new Color(0xF1284C);
const secondaryLightColor = new Color(0xA61B66);

const camera = new PerspectiveCamera(75, 1, 0.1, 1000)
camera.position.z = 5;
camera.position.x = 0.55;

interface IBallProps {
    name: string
    radius: number
}
function Ball({ name, radius }: IBallProps) {
    const { height, squish } = useTheatre(name, ['height', 'squish'], TLEasyAnimation)

    return (
        <group>
            <mesh
                position={new Vector3(0, height, 0)}
                scale={new Vector3(1, squish, 1)}
            >
                <sphereGeometry attach="geometry" args={[radius, 32, 32]} />
                <meshPhongMaterial attach="material" />
            </mesh>
        </group>
    )
}

interface ILightProps {
    name: string
    color: Color
}
function Light({ name, color }: ILightProps) {
    const { x, y, z } = useTheatre(name, ['x', 'y', 'z'], TLEasyAnimation)
    const [positionVector, setPositionVector] = useState<Vector3>(new Vector3(0, 0, 0))

    useEffect(() => {
        setPositionVector(new Vector3(x, y, z))
    }, [x, y, z])

    return (<pointLight position={positionVector} color={color} intensity={1} />)
}

export default function BouncingBall () {
    return (
        <div className="BouncingBall">
            <Canvas camera={camera}>
                <group>
                    <Ball name="Ball" radius={1} />
                    <Light name="Light One" color={primaryLightColor} />
                    <Light name="Light Two" color={secondaryLightColor} />
                </group>
            </Canvas>    
        </div>
    )
}