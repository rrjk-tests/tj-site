import React from 'react';

import Section from '../../shared-components/Section';

import './style.scss';
import SectionInfo from '../../shared-components/SectionInfo';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import Dot from '../../shared-components/Dot';
import ControlBox from './ControlBox';

const { info } = sections.control;

export default function controlSection() {
  return (
    <Section line={lineSVG}>
      <div className="control-section">
        <Dot top="-2rem" left="35%" />
        <SectionInfo
          isRTL
          className="control-section__content"
          {...info}
        />
        <div className="control-section__control-box">
          <ControlBox points={[
            {x: 10, y: 10},
            {x: 100, y: 30},
          ]} />
        </div>
      </div>
    </Section>
  );
}