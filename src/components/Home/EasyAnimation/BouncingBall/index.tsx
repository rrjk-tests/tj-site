import React, { useEffect, useState, useContext } from 'react';
import { useTheatre } from '@theatre/hooks';
import { Canvas } from 'react-three-fiber';

import './style.scss';
import { TLEasyAnimation } from '../../../../shared/Theatre';
import { Vector3, Color, PerspectiveCamera, Euler } from 'three';
import { ScrollContext } from './../../../../shared/ScrollBar';

const primaryLightColor = new Color(0xF1284C);
const secondaryLightColor = new Color(0xA61B66);

const camera = new PerspectiveCamera(75, 1, 0.1, 1000)
camera.position.z = 6;
camera.position.y = -0.3;

interface IBallProps {
    name: string
    radius: number
}
function Ball({ name, radius }: IBallProps) {
    const { height, squish } = useTheatre(name, ['height', 'squish'], TLEasyAnimation)

    useEffect(() => {
        TLEasyAnimation.play({ iterationCount: Infinity })
        return () => TLEasyAnimation.pause()
    }, [])

    return (
        <group>
            <mesh
                position={new Vector3(0, height, 0)}
                scale={new Vector3(1/squish, squish, 1)}
            >
                <sphereGeometry attach="geometry" args={[radius, 32, 32]} />
                <meshPhongMaterial attach="material" />
            </mesh>
        </group>
    )
}

interface IFloorProps {
    width: number
    height: number
}
function Floor ({ width, height }: IFloorProps) {
    return (
        <group>
            <mesh
                position={new Vector3(0, -2, 0)}
                rotation={new Euler(Math.PI / 2, 0, 0)}
            >
                <planeGeometry attach="geometry" args={[width, height, width * 3, width * 3] as any} />
                <meshBasicMaterial attach="material" transparent wireframe opacity={0.2} color={primaryLightColor} />
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
    const scroll = useContext(ScrollContext)

    return (
        <div className="bouncing-ball">
            <Canvas camera={camera}>
                <group
                    rotation={new Euler(0.01, (scroll / 1000 * Math.PI), 0)}
                >
                    <Ball name="Ball" radius={1} />
                    <Floor width={4} height={4} />
                    <Light name="Light One" color={primaryLightColor} />
                    <Light name="Light Two" color={secondaryLightColor} />
                </group>
            </Canvas>    
        </div>
    )
}