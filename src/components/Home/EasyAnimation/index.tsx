import React from 'react';

import Button from '../../shared-components/Button';
import Section from '../../shared-components/Section';

import './style.scss';
import SectionInfo from '../../shared-components/SectionInfo';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import Dots from '../../shared-components/Dots';

const { info } = sections.easyAnimation;

export default function EasyAnimationSection() {
  return (
    <Section line={lineSVG}>
      <div className="easy-animation-section">
        <Dots number={3} />
        <SectionInfo
          isRTL
          className="easy-animation-section__content"
          {...info}
        />
      </div>
    </Section>
  );
}