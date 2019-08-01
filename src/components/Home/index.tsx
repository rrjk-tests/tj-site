import React from 'react'

import './style.scss';

import HeadingSection from './HeadingSection';
import FluidSection from './FluidSection';
import GetAhead from './GetAhead';

export default function App(){
    return (
        <div className="app">
            <HeadingSection />
            <FluidSection />
            <GetAhead />
        </div>
    );
}