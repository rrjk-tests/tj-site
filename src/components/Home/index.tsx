import React from 'react'

import './style.scss';

import HeadingSection from './HeadingSection';
import ControlSection from './ControlSection';
import FluidSection from './FluidSection';
import GetAhead from './GetAhead';

export default function App(){
    return (
        <div className="app">
            <HeadingSection />
            <ControlSection />
            <FluidSection />
            <GetAhead />
        </div>
    );
}