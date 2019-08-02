import React from 'react'

import controlBoxSVG from './control-box.svg';
import cursorSVG from './cursor.svg';

import './style.scss';

export default function ControlBox() {

    return (
        <div className="ControlBox">
            <img className="ControlBox__box" src={controlBoxSVG} alt="Theatre Control Box" />
            <img className="ControlBox__cursor" src={cursorSVG} alt="Theatre Cursor Box" />
        </div>
    )
}