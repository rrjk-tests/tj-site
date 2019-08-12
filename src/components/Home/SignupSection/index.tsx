import React from 'react';
import Section from '../../shared-components/Section';
import SectionContent from '../../shared-components/SectionContent';

import JoinUs from './JoinUs';

import './style.scss';

import { sections } from '../../../locale/en';
import lineSVG from './line.svg';
import mobileLineSVG from './mobileLine.svg';
import Dot from '../../shared-components/Dot';

const { getAhead: { info } } = sections;

export default function SignupSection(){
  return (
    <Section line={lineSVG} mobileLine={mobileLineSVG}>
      <div className="signup-section">
        <Dot bottom={-20} left="50%" />
        <Dot bottom={-40} left="50%" />
        <Dot bottom={-60} left="50%" />
        <SectionContent
          contentAlignment="center"
          {...info}
        />
        <JoinUs />
      </div>
    </Section>
  );
}