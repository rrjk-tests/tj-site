import React from 'react';

import Button from '../../shared-components/Button';
import Section from '../../shared-components/Section';

import './style.scss';
import SectionInfo from '../../shared-components/SectionInfo';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';

const { info } = sections.control;

export default function controlSection() {
  return (
    <Section line={lineSVG}>
      <div className="control-section">
        <SectionInfo
          isRTL
          className="control-section__content"
          {...info}
        />
      </div>
    </Section>
  );
}