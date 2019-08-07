import React from 'react';

import Section from '../../shared-components/Section';
import SectionInfo from '../../shared-components/SectionInfo';
import Button from '../../shared-components/Button';

import './style.scss';

import { sections } from '../../../locale/en';

import lineSVG from './line.svg';
import mobileLineSVG from './mobileLine.svg';
import ShootingStar from '../../shared-components/ShootingStar';
import Dot from '../../shared-components/Dot';

const { fluid: { info, buttons: { clickMe, hoverMe, selectMe } } } = sections;

export default function FluidSection(){
  return (
    <Section line={lineSVG} mobileLine={mobileLineSVG}>
      <div className="fluid-section">
        <ShootingStar
          isVertical
          right={-135}
          top={62}
        />
        <SectionInfo
          {...info}
        />
        <div className="fluid-section__actions">
          <Dot top="6.5rem" type="tertiary" left="50%" />
          <Dot top="14.5rem" type="tertiary" left="50%" />
          <Button
            text={clickMe}
          />
          <Button
            text={hoverMe}
            styleType="secondary"
            hasOutline
          />
          <Button
            text={selectMe}
            styleType="fourth"
            hasOutline
          />
        </div>
      </div>
    </Section>
  );
}