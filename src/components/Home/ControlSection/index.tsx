import React from 'react';

import Section from '../../shared-components/Section';

import './style.scss';
import SectionInfo from '../../shared-components/SectionInfo';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import controlBoxSVG from './control-box.svg';
import cursorSVG from './cursor.svg';
import Dot from '../../shared-components/Dot';

const { info } = sections.control;

export default function controlSection() {
  return (
    <Section line={lineSVG}>
      <div className="control-section">
        <Dot top="5rem" left="30%" />
        <SectionInfo
          isRTL
          className="control-section__content"
          {...info}
        />
        <div className="control-section__control-box">
          <img className="box" src={controlBoxSVG} alt="Theatre Control Box" />
          <img className="cursor" src={cursorSVG} alt="Theatre Cursor Box" />
        </div>
      </div>
    </Section>
  );
}