import React from 'react'

import './style.scss';

import HeadingSection from './HeadingSection';
import ControlSection from './ControlSection';

export default function App(){
    return (
        <div className="app">
            <HeadingSection />
            <ControlSection />
        </div>
    );
}