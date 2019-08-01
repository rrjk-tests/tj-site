import React from 'react';
import Section from '../../shared-components/Section';
import SectionInfo from '../../shared-components/SectionInfo';

import JoinUs from './JoinUs';

import { sections } from '../../../locale/en';

const { getAhead: { info } } = sections;

export default function GetAhead(){
  return (
    <Section>
      <div className="get-ahead">
        <SectionInfo
          {...info}
        />
        <JoinUs />
      </div>
    </Section>
  );
}