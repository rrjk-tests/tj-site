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
        <Dot bottom={0} left="45%" type="primary" />
        <Dot top={0} type="tertiary" left={20} />
        <SectionInfo
          direction="rtl"
          className="easy-animation-section__content"
          {...info}
        />
        <BouncingBall />
      </div>
    </Section>
  );
}