import React from 'react'

import './style.scss';

import HeadingSection from './HeadingSection';

import { sections } from '../../locale/en';

const { heading } = sections;

export default function App(){
    return (
        <div className="app">
            <HeadingSection {...heading.info} button={heading.button} />
        </div>
    );
}