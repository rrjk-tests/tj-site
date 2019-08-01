import React from 'react';

import Section from '../../shared-components/Section';
import SectionInfo from '../../shared-components/SectionInfo';
import Button from '../../shared-components/Button';

import './style.scss';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import ShootingStar from '../../shared-components/ShootingStar';

const { fluid: { info, buttons: { clickMe, hoverMe, selectMe } } } = sections;

export default function FluidSection(){
  return (
    <Section line={lineSVG}>
      <div className="fluid-section">
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
            text={hoverMe}
            isSecondary
            isOutline
          />
          <Button
            text={selectMe}
            color="#45AAF1"
            isOutline
          />
        </div>
      </div>
    </Section>
  );
}