import React from 'react';
import Section from '../../shared-components/Section';
import SectionInfo from '../../shared-components/SectionInfo';

import JoinUs from './JoinUs';

import './style.scss';

import { sections } from '../../../locale/en';
import ShootingStar from '../../shared-components/ShootingStar';
import Dots from '../../shared-components/Dots';

const { getAhead: { info } } = sections;

export default function GetAhead(){
  return (
    <Section>
      <div className="get-ahead">
        <Dots number={3} />
        <ShootingStar
          isVertical
          left="100%"
        />
        <SectionInfo
          {...info}
        />
        <JoinUs />
      </div>
    </Section>
  );
}