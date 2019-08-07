import React from 'react';
import Section from '../../shared-components/Section';
import SectionInfo from '../../shared-components/SectionInfo';

import JoinUs from './JoinUs';

import './style.scss';

import { sections } from '../../../locale/en';
import lineSVG from './line.svg';
import Dot from '../../shared-components/Dot';

const { getAhead: { info } } = sections;

export default function GetAhead(){
  return (
    <Section line={lineSVG}>
      <div className="get-ahead">
        <Dot bottom={-20} left="50%" />
        <Dot bottom={-40} left="50%" />
        <Dot bottom={-60} left="50%" />
        <SectionInfo
          direction="center"
          {...info}
        />
        <JoinUs />
      </div>
    </Section>
  );
}