import React from 'react'

import './style.scss';

import HeadingSection from './HeadingSection';
import FluidSection from './FluidSection';

export default function App(){
    return (
        <div className="app">
            <HeadingSection />
            <FluidSection />
        </div>
    );
}