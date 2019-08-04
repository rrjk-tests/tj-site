import React, { useState, useEffect } from 'react'

import controlBoxSVG from './control-box.svg';
import cursorSVG from './cursor.svg';

import './style.scss';
import pathGenerator from '../../../../shared/pathGenerator';

interface ICursor {
    x: number
    y: number
}

interface IKeyframe {
    time: number
    value: number
    biasInX?: number
    biasInY?: number
}
interface IProps {
    keyframes: IKeyframe[]
    cursor: ICursor
}

const timeToX = (time: number) => { return (time / 1500) * 226 }
const valueToY = (value: number) => { return value + 110 }

const getPoints = (keyframes: IKeyframe[]) => {
    const elements = []
    for (const keyframe of keyframes) {
        const x = timeToX(keyframe.time) + (keyframe.biasInX || 0);
        const y = valueToY(keyframe.value) + (keyframe.biasInY || 0);
        elements.push(<g key={keyframe.time} style={{ transform: `translate(${x}px, ${y}px)` }}>
            <rect className="ControlBox__keyframe" x="0" y="0" width="12" height="12" transform="rotate(-45)"/>
        </g>)
    }
    return elements
}

const generatePath = (keyframes: IKeyframe[]) => {
    const points: [number, number][] = [];
    points.push([timeToX(0), valueToY(0)])
    for (let keyframe of keyframes) {
        points.push([timeToX(keyframe.time), valueToY(keyframe.value)])
    }
    points.push([timeToX(1800), valueToY(0)])
    return pathGenerator(points);
}

export default function ControlBox({ keyframes, cursor }: IProps) {
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(generatePath(keyframes))
    }, [keyframes])

    return (
        <div className="ControlBox">
            <svg width={267} height={200}>
                <path className="ControlBox__path" d={path}></path>
                {getPoints(keyframes)}
            </svg>
            <img className="ControlBox__box" src={controlBoxSVG} alt="Theatre Control Box" />
            <img className="ControlBox__cursor"
                src={cursorSVG}
                style={{
                    marginLeft: cursor.x,
                    marginTop: cursor.y
                }}
                alt="Theatre Cursor Box" />
        </div>
    )
}