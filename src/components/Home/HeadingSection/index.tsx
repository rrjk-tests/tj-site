import React from 'react';

import Button from '../../shared-components/Button';
import Section from '../../shared-components/Section';

import logo from './logo.svg';
import './style.scss';
import SectionInfo from '../../shared-components/SectionInfo';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import ShootingStar from '../../shared-components/ShootingStar';

const { info, button } = sections.heading;

export default function HeadingSection() {
  return (
    <Section hasGlown line={lineSVG}>
      <div className="heading-section">
        <ShootingStar
          right={-70}
        />
        <ShootingStar
          isReversed
          left={72}
        />
        <img
          className="heading-section__logo"
          src={logo}
          alt="TheatreJS logo"
        />
        <SectionInfo
          direction="center"
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