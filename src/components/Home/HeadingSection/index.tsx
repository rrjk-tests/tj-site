import React from 'react';

import Button from '../../shared-components/Button';
import Section from '../../shared-components/Section';

import logo from './logo.svg';
import './style.scss';
import SectionInfo from '../../shared-components/SectionInfo';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';

const { info, button } = sections.heading;

export default function HeadingSection() {
  return (
    <Section hasGlown line={lineSVG}>
      <div className="heading-section">
        <img
          className="heading-section__logo"
          src={logo}
          alt="TheatreJS logo"
        />
        <SectionInfo
          className="heading-section__content"
          {...info}
        />
        <div className="heading-section__action">
          <Button
            text={button}
          />
        </div>
      </div>
    </Section>
  );
}