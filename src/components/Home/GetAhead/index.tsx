import React from 'react';
import Section from '../../shared-components/Section';
import SectionInfo from '../../shared-components/SectionInfo';

import JoinUs from './JoinUs';

import './style.scss';

import { sections } from '../../../locale/en';
import ShootingStar from '../../shared-components/ShootingStar';
import Dot from '../../shared-components/Dot';

const { getAhead: { info } } = sections;

export default function GetAhead(){
  return (
    <Section>
      <div className="get-ahead">
        <Dot top="24rem" left="53rem" />
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