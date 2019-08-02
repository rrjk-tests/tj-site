import React from 'react';

import Section from '../../shared-components/Section';
import SectionInfo from '../../shared-components/SectionInfo';
import Button from '../../shared-components/Button';

import './style.scss';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import ShootingStar from '../../shared-components/ShootingStar';
import Dots from '../../shared-components/Dots';

const { fluid: { info, buttons: { clickMe, hoverMe, selectMe } } } = sections;

export default function FluidSection(){
  return (
    <Section line={lineSVG}>
      <div className="fluid-section">
        <Dots number={4} />
        <ShootingStar
          isVertical
          left="100%"
        />
        <SectionInfo
          {...info}
        />
        <div className="fluid-section__actions">
          <Button
            text={clickMe}
          />
          <Button
            styleType="secondary"
            text={hoverMe}
            hasOutline
          />
          <Button
            text={selectMe}
            styleType="tertiary"
            hasOutline
          />
        </div>
      </div>
    </Section>
  );
}