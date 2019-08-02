import React, { useEffect, useState } from 'react'
import Path from 'svg-path-generator'

import controlBoxSVG from './control-box.svg';
import cursorSVG from './cursor.svg';

import './style.scss';

interface Point2D {
    x: number
    y: number
}
interface IProps {
    points: Point2D[]
}

const getPoints = (points: Point2D[]) => {
    const elements = []
    for (const point of points) {
        elements.push(<circle cx={point.x} cy={point.y} r={2} fill="red" />)
    }
    return elements
}

export default function ControlBox({ points }: IProps) {
    const [path, setPath] = useState('');
    
    useEffect(() => {
        const generatedPath = Path()
            .moveTo(0, 100)
            .smoothCurveTo(0, 0, 100, 75)
            .smoothCurveTo(0, 0, 200, 140)
            .end();
        setPath(generatedPath)
    }, [points])

    return (
        <div className="ControlBox">
            <svg>
                {getPoints(points)}
                {/* <path fill="transparent" strokeWidth="2" stroke="red" d={path}></path> */}
            </svg>
            <img className="ControlBox__box" src={controlBoxSVG} alt="Theatre Control Box" />
            <img className="ControlBox__cursor" src={cursorSVG} alt="Theatre Cursor Box" />
        </div>
    )
}