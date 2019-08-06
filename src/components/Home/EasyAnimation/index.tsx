import React from 'react';

import Section from '../../shared-components/Section';

import './style.scss';
import SectionInfo from '../../shared-components/SectionInfo';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import Dot from '../../shared-components/Dot';
import BouncingBall from './BouncingBall';

const { info } = sections.easyAnimation;

export default function EasyAnimationSection() {
  return (
    <Section line={lineSVG}>
      <div className="easy-animation-section">
        <Dot type="white" />
        <Dot top="-10rem" left="40rem" />
        <SectionInfo
          isRTL
          className="easy-animation-section__content"
          {...info}
        />
        <BouncingBall />
      </div>
    </Section>
  );
}